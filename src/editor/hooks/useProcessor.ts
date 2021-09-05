import {useState} from 'react';
import {IMatches, ISelectionChangeEvent} from '../../@shared/@types';
import {regex} from '../../@shared/constants';

interface IGetTextFromMatches {
  cursor: number;
  matches: IMatches;
  incomingText: string;
  existingText: string;
}

interface IGInsertedText {
  cursor: number;
  incomingText: string;
  existingText: string;
}

const insertSubStr = (str: string, subStr: String, position: number) => {
  return str.substring(0, position) + subStr + str.substring(position);
};

const getMatchesFromTextV2 = (text: string) => {
  let match = null;
  const matches = [];
  while ((match = regex.half.exec(text)) !== null) {
    const start = match.index;
    const content = match[0];
    const boldMatch = regex.halfBold.exec(content);
    const italicMatch = regex.halfItalic.exec(content);

    if (boldMatch) {
      text = text.replace(regex.halfBold, '');
    }
    if (italicMatch) {
      text = text.replace(regex.halfItalic, '');
    }
    matches.push({content, start});
  }
  return matches;
};

const getTextFromMatches = ({
  cursor,
  matches,
  incomingText,
  existingText,
}: IGetTextFromMatches) => {
  let unparsedText = incomingText;
  const tLength = getInsertedTextLength(incomingText, existingText);

  const reverseMatches = matches
    .slice(0)
    .reverse()
    .map(match => {
      if (match.start > cursor) {
        return {
          ...match,
          start: match.start + tLength,
        };
      }
      return match;
    });

  reverseMatches.map((match, index) => {
    const startIndex = match.start;
    unparsedText = insertSubStr(unparsedText, match.content, startIndex);
  });

  unparsedText = unparsedText.replace(regex.boldEmpty, '');
  unparsedText = unparsedText.replace(regex.italicEmpty, '');

  return unparsedText;
};

const getInsertedTextLength = (incomingText: string, existingText: string) => {
  return incomingText.length - existingText.length;
};

const getParseTextDefaultValue = (text?: string) => {
  return text?.replace(new RegExp(regex.half, 'g'), '') || '';
};

interface IUseProcessor {
  text?: string;
  updateText?: (text: string) => void;
}

const useProcessor = (props: IUseProcessor) => {
  const [cursor, setCursor] = useState(0);
  const parseTextDefaultValue = getParseTextDefaultValue(props.text);
  const [existingText, setExistingText] = useState(parseTextDefaultValue);

  const onSelectionChange = (e: ISelectionChangeEvent) => {
    setCursor(e.nativeEvent.selection.start);
  };

  const handlerTextChange = async (incomingText: string) => {
    const matches = props.text ? getMatchesFromTextV2(props.text) : [];

    if (!matches.length) {
      setExistingText(incomingText);
      props.updateText?.(incomingText);
      return;
    }
    const textFromMatches = getTextFromMatches({
      cursor,
      matches,
      incomingText,
      existingText,
    });

    props.updateText?.(textFromMatches);
    setExistingText(incomingText);
  };

  return {onSelectionChange, handlerTextChange};
};

export default useProcessor;
