import 'jest-styled-components';
import React from 'react';
import {Text} from 'react-native';
import renderer from 'react-test-renderer';
import TestProvider from '../../../__testUtils__/Providers';
import FlatList from '../FlatList';

test('styled Container works', () => {
  const tree = renderer
    .create(
      <TestProvider>
        <FlatList data={[]} renderItem={() => <Text />} />
      </TestProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
