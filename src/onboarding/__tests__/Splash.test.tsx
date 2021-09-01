import 'jest-styled-components';
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from '../../@shared/constants';
import Splash from '../Splash';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Splash />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
