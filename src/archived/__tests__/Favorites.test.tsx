import {cleanup, render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import Archived from '../Archived';

describe('Archived', () => {
  afterEach(cleanup);

  test('Archived renders correctly', async () => {
    const screen = render(
      <TestProvider>
        <Archived />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('Archived functionality test', async () => {
    const screen = render(
      <TestProvider>
        <Archived />
      </TestProvider>,
    );
    const headerTitle = await screen.findByText('Archived');
    expect(headerTitle).toBeTruthy();
  });
});
