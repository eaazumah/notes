import {cleanup, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import Settings from '../Settings';

describe('Settings', () => {
  afterEach(cleanup);

  test('Settings renders correctly', () => {
    const screen = render(
      <TestProvider>
        <Settings />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('it should update showThemePicker on theme item press', () => {
    const screen = render(
      <TestProvider>
        <Settings />
      </TestProvider>,
    );
    const picker = screen.getByTestId('theme-picker');
    expect(picker.props.isVisible).toEqual(false);

    const item = screen.getByTestId('theme-item');

    fireEvent.press(item);
    expect(picker.props.isVisible).toEqual(true);
  });
});
