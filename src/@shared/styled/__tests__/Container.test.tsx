import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from '../../constants';
import Container from '../Container';

test('styled Container works', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Container />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
