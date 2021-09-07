import {ColorSchemeName} from 'react-native';
import {ITheme} from '../@types';
import {themes} from '../constants';

const getThemeObject = (mode: ITheme, system: ColorSchemeName) => {
  if (mode === 'system') {
    return themes[system || 'light'];
  }
  return themes[mode];
};

export default getThemeObject;
