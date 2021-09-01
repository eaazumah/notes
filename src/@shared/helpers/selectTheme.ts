import {IReduxSate} from '../@types';

const selectTheme = (state: IReduxSate) => {
  return state.settings.theme;
};

export default selectTheme;
