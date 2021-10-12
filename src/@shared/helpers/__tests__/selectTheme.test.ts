import '@testing-library/react-native';
import {IReduxSate} from '../../@types';
import selectTheme from '../selectTheme';

const state: IReduxSate = {
  settings: {
    theme: 'light',
  },
  notes: [],
};

describe('Redux state theme selector', () => {
  test('selects theme from state', () => {
    const theme = selectTheme(state);
    expect(theme).toEqual('light');
  });
});
