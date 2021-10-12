jest.useFakeTimers();

import { NavigationContainer } from '@react-navigation/native';
import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import BottomTab from '../BottomTab';

describe('Bottom Tab Navigator', () => {
  afterEach(cleanup);
  test('Bottom Tab Navigator renders correctly', () => {
    const bottomTab = render(
      <TestProvider>
        <NavigationContainer  >
          <BottomTab />
        </NavigationContainer>
      </TestProvider>,
    );
    expect(bottomTab.toJSON()).toMatchSnapshot();
  });
});
