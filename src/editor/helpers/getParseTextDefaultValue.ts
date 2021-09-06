import {regex} from '../../@shared/constants';

const getParseTextDefaultValue = (text?: string) => {
  return text?.replace(new RegExp(regex.half, 'g'), '') || '';
};

export default getParseTextDefaultValue;
