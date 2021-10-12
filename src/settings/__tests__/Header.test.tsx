jest.useFakeTimers();
import {render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import Header from '../components/Header';

describe('Settings Header', () => {
  test('Header renders correctly', () => {
    const screen = render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
