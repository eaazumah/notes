import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import getThemeObject from '../helpers/getThemeObject';
import selectTheme from '../helpers/selectTheme';

const useTheme = () => {
  const system = useColorScheme();
  const mode = useSelector(selectTheme);
  const theme = getThemeObject(mode, system);
  return {theme, mode};
};

export default useTheme;
