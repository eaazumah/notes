import {cleanup, render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import Favorites from '../Favorites';

describe('Favorites', () => {
  afterEach(cleanup);

  test('Favorites renders correctly', async () => {
    const screen = render(
      <TestProvider>
        <Favorites />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('Favorites functionality test', async () => {
    const screen = render(
      <TestProvider>
        <Favorites />
      </TestProvider>,
    );
    const headerTitle = await screen.findByText('Favorites');
    expect(headerTitle).toBeTruthy();
  });
});
