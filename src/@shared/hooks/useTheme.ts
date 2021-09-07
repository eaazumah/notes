import {useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ITheme} from '../@types';
import getThemeObject from '../helpers/getThemeObject';
import selectTheme from '../helpers/selectTheme';
import {settingsActions} from '../redux/settings/slice';

const useTheme = () => {
  const dispatch = useDispatch();
  const system = useColorScheme();
  const mode = useSelector(selectTheme);
  const theme = getThemeObject(mode, system);

  const updateTheme = (_mode: ITheme) => {
    dispatch(settingsActions.updates({theme: _mode}));
  };

  return {theme, mode, updateTheme};
};

export default useTheme;
