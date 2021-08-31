import {ColorSchemeName} from 'react-native';
import {ITheme} from '../@types';
import {themes} from '../constants';

const getThemeObject = (mode: ITheme, system: ColorSchemeName) => {
  return themes[mode || system || 'light'];
};

export default getThemeObject;
