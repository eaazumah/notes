import {useState} from 'react';
import {ISelectionChangeEvent} from '../../@shared/@types';
import getParseTextDefaultValue from '../helpers/getParseTextDefaultValue';
import getRegexMatchesFromText from '../helpers/getRegexMatchesFromText';
import getTextFromRegexMatches from '../helpers/getTextFromRegexMatches';

interface IUseTextProcessor {
  text?: string;
  updateText?: (text: string) => void;
}

const useTextProcessor = (args: IUseTextProcessor) => {
  const [selection, setSelection] = useState({
    end: 0,
    start: 0,
  });
  const parseTextDefaultValue = getParseTextDefaultValue(args.text);
  const [existingText, setExistingText] = useState(parseTextDefaultValue);

  const onSelectionChange = (e: ISelectionChangeEvent) => {
    setSelection(e.nativeEvent.selection);
  };

  const italicize = () => {};

  const embolden = () => {};

  const handlerTextChange = async (incomingText: string) => {
    const matches = args.text ? getRegexMatchesFromText(args.text) : [];
    if (!matches.length) {
      setExistingText(incomingText);
      args.updateText?.(incomingText);
      return;
    }
    const cursor = selection.start;
    const textFromMatches = getTextFromRegexMatches({
      cursor,
      matches,
      incomingText,
      existingText,
    });
    args.updateText?.(textFromMatches);
    setExistingText(incomingText);
  };

  return {onSelectionChange, handlerTextChange, italicize, embolden};
};

export default useTextProcessor;
