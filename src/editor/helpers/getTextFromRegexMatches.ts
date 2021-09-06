import {IMatches} from '../../@shared/@types';
import {regex} from '../../@shared/constants';
import insertSubString from './insertSubString';

interface IGetTextFromRegexMatches {
  cursor: number;
  matches: IMatches;
  incomingText: string;
  existingText: string;
}

const getInsertedTextLength = (incomingText: string, existingText: string) => {
  return incomingText.length - existingText.length;
};

const getTextFromRegexMatches = (args: IGetTextFromRegexMatches) => {
  let unparsedText = args.incomingText;
  const tLength = getInsertedTextLength(args.incomingText, args.existingText);

  const reverseMatches = args.matches
    .slice(0)
    .reverse()
    .map(match => {
      if (match.start < args.cursor) {
        return match;
      }
      return {
        ...match,
        start: match.start + tLength,
      };
    });

  reverseMatches.map(match => {
    const startIndex = match.start;
    unparsedText = insertSubString(unparsedText, match.content, startIndex);
  });

  unparsedText = unparsedText.replace(regex.boldEmpty, '');
  unparsedText = unparsedText.replace(regex.italicEmpty, '');

  return unparsedText;
};

export default getTextFromRegexMatches;
