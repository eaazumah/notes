import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import TestProvider from '../../../__testUtils__/Providers';
import ScrollView from '../ScrollView';

test('styled ScrollView works', () => {
  const tree = renderer
    .create(
      <TestProvider>
        <ScrollView />
      </TestProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
