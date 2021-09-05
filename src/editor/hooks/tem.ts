import {useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {IMatches, ISelectionChangeEvent} from '../../@shared/@types';
import {regex} from '../../@shared/constants';

interface IGetAdjustMatchesIndex {
  cursor: number;
  matches: IMatches;
  insertedTextLength: number;
}

const myText = `
 *@$*&^%@#$@#@!%&Hello World*@$*&^%@#$@#@!%&
!@#$^&*$#@*^@%#^@#*&^%$#@!&%$#This is a bold text!@#$^&*$#@*^@%#^@#*&^%$#@!&%$#
`;

interface IGetTextFromMatches {
  cursor: number;
  matches: IMatches;
  currentText: string;
  previousText: string;
}

interface IGInsertedText {
  cursor: number;
  currentText: string;
  previousText: string;
}

// const sleep = (milliseconds: number) => {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// };

const removeCharacters = (str: string, bIndex: number, eIndex: number) => {
  const strArray = str.split('');
  strArray.splice(bIndex, eIndex - bIndex);
  return strArray.join('');
};

const insertSubStr = (str: string, subStr: String, position: number) => {
  return str.substring(0, position) + subStr + str.substring(position);
};

const getMatchesFromText = (text: string): IMatches => {
  let match = null;
  const matches: IMatches = [];

  let nextUnparsedText = text;

  let nextParsedText = text;

  while ((match = regex.full.exec(nextUnparsedText)) !== null) {
    const unparsedContent = match[0];
    const start = match.index;
    const end = start + unparsedContent.length;

    const boldMatch = regex.bold.exec(unparsedContent);
    const italicMatch = regex.italic.exec(unparsedContent);

    if (boldMatch) {
      const parsedContent = boldMatch[0].replace(regex.halfBold, '');
      nextParsedText = nextParsedText.replace(regex.bold, parsedContent);
      nextUnparsedText = removeCharacters(nextUnparsedText, start, end);
      matches.push({
        end,
        start,
        parsedContent,
        nextParsedText,
        unparsedContent,
        nextUnparsedText,
        patternLength: 4,
        format: 'bold',
      });
    } else if (italicMatch) {
      const parsedContent = italicMatch[0].replace(regex.halfItalic, '');
      nextParsedText = nextParsedText.replace(regex.italic, parsedContent);
      nextUnparsedText = removeCharacters(nextUnparsedText, start, end);
      matches.push({
        end,
        start,
        parsedContent,
        nextParsedText,
        unparsedContent,
        nextUnparsedText,
        patternLength: 2,
        format: 'italic',
      });
    }
  }
  console.log(JSON.stringify(matches, null, 2));
  return matches;
};

const getInsertedText = ({
  cursor,
  currentText,
  previousText,
}: IGInsertedText) => {
  const insertedTextLength = getInsertedTextLength(currentText, previousText);
  if (insertedTextLength >= 1) {
    return currentText.substring(cursor - insertedTextLength, cursor);
  } else {
    return '';
  }
};

const getTextFromMatches = ({
  cursor,
  matches,
  currentText,
  previousText,
}: IGetTextFromMatches) => {
  let unparsedText = currentText;
  const tLength = getInsertedTextLength(currentText, previousText);

  // console.log('\x1b[33m%s\x1b[0m', previousText);
  // console.log('#######################################');
  // console.log('\x1b[33m%s\x1b[0m', currentText);
  // console.log('#######################################');
  const reverseMatches = matches.slice(0).reverse();
  // .map(match => {
  //   if (match.start > cursor) {
  //     return {
  //       ...match,
  //       start: match.start + ,
  //     };
  //   }
  //   return match;
  // });

  reverseMatches.map((match, index) => {
    console.log(match.start, cursor, tLength);

    if (index === matches.length - 1) {
      // const startIndex = match.start;
      // const endIndex = startIndex + match.parsedContent.length;
      // unparsedText = removeCharacters(unparsedText, startIndex, endIndex);
      // unparsedText = insertSubStr(
      //   unparsedText,
      //   match.unparsedContent,
      //   startIndex,
      // );
    } else {
      const prev = reverseMatches[index + 1];
      const startIndex = match.start + prev.parsedContent.length;
      const endIndex = startIndex + match.parsedContent.length;

      console.log(startIndex, endIndex);
      unparsedText = removeCharacters(unparsedText, startIndex, endIndex);
      console.log(unparsedText);
      console.log('#######################################');
      unparsedText = insertSubStr(
        unparsedText,
        match.unparsedContent,
        startIndex,
      );
    }
  });
  return unparsedText;
};

const getInsertedTextLength = (currentText: string, previousText: string) => {
  return currentText.length - previousText.length;
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
  const [parseText, setParseText] = useState(parseTextDefaultValue);

  const onSelectionChange = (e: ISelectionChangeEvent) => {
    setCursor(e.nativeEvent.selection.start);
    // console.log(e.nativeEvent.selection.start);
  };

  const handlerChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    console.log(e.nativeEvent);
  };

  const handlerTextChange = async (text: string) => {
    const matches = props.text ? getMatchesFromText(props.text) : [];
    if (!matches.length) {
      setParseText(text);
      props.updateText?.(text);
      return;
    }
    const updatedNoteText = getTextFromMatches({
      cursor,
      matches,
      currentText: text,
      previousText: parseText,
    });
    // props.updateText?.(updatedNoteText);
    setParseText(text);
  };

  useEffect(() => {}, []);

  return {onSelectionChange, setParseText, handlerTextChange, handlerChange};
};

export default useProcessor;
