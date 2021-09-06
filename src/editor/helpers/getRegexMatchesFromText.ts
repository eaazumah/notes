import {regex} from '../../@shared/constants';

const getRegexMatchesFromText = (text: string) => {
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

export default getRegexMatchesFromText;
