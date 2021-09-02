import '@testing-library/react-native';
import {darkTheme, lightTheme} from '../../constants';
import getThemeObject from '../getThemeObject';

describe('Get Theme Object', () => {
  test('In  app light mode', () => {
    const theme = getThemeObject('light', undefined);
    expect(theme).toMatchObject(lightTheme);
  });

  test(' In app dark mode', () => {
    const theme = getThemeObject('dark', undefined);
    expect(theme).toMatchObject(darkTheme);
  });

  test(' System light mode', () => {
    const theme = getThemeObject(undefined, 'light');
    expect(theme).toMatchObject(lightTheme);
  });

  test(' System light dark', () => {
    const theme = getThemeObject(undefined, 'dark');
    expect(theme).toMatchObject(darkTheme);
  });
});
