import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import TestProvider from '../../../__testUtils__/Providers';
import Container from '../Container';

test('styled Container works', () => {
  const tree = renderer
    .create(
      <TestProvider>
        <Container />
      </TestProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
