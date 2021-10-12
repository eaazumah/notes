import {cleanup, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../../__testUtils__/Providers';
import Card from '../Card';

describe('Card', () => {
  afterEach(cleanup);

  test('Card renders correctly', async () => {
    const item = {
      id: 'kd35y6',
      title: 'Title',
      text: 'My notes',
      favorite: false,
      createdAt: Date.now(),
    };
    const onPress = jest.fn();
    const container = render(
      <TestProvider>
        <Card item={item} onPress={onPress} />
      </TestProvider>,
    );
    expect(container.toJSON()).toMatchSnapshot();
  });

  test('Card functionality test', async () => {
    const item = {
      id: 'kd35y6',
      title: 'Title',
      text: 'My notes',
      favorite: false,
      createdAt: Date.now(),
    };
    const onCardPress = jest.fn();

    const container = render(
      <TestProvider>
        <Card item={item} onPress={onCardPress} />
      </TestProvider>,
    );

    const component = await container.findByTestId('card');
    expect(component).toBeTruthy();
    expect(onCardPress).not.toHaveBeenCalled();
    fireEvent.press(component);
    expect(onCardPress).toHaveBeenCalled();
  });
});
