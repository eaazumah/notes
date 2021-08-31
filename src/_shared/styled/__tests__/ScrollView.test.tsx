import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from '../../constants';
import ScrollView from '../ScrollView';

test('styled ScrollView works', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <ScrollView />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
