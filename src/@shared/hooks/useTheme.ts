import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {IReduxSate} from '../@types';
import getThemeObject from '../helpers/getThemeObject';

const selectTheme = (state: IReduxSate) => state.settings.theme;

const useTheme = () => {
  const system = useColorScheme();
  const mode = useSelector(selectTheme);
  const theme = getThemeObject(mode, system);
  return {theme, mode};
};

export default useTheme;
