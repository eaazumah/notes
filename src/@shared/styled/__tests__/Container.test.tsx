import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import TestProviders from '../../../__testUtils__/Providers';
import Container from '../Container';

test('styled Container works', () => {
  const tree = renderer
    .create(
      <TestProviders mode={'light'}>
        <Container />
      </TestProviders>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
