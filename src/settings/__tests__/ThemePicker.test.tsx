import {cleanup, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import ThemePicker from '../components/ThemePicker';

describe('Theme Picker', () => {
  afterEach(cleanup);
  test('Theme Picker renders correctly', () => {
    const setIsVisible = jest.fn();
    const screen = render(
      <TestProvider>
        <ThemePicker isVisible={false} setIsVisible={setIsVisible} />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
    const component = screen.getByTestId('theme-picker');
    expect(component.props.isVisible).toEqual(false);
  });

  test('Theme Picker Select Dark Theme Functionality Test', () => {
    const setIsVisible = jest.fn();
    const screen = render(
      <TestProvider>
        <ThemePicker isVisible={true} setIsVisible={setIsVisible} />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
    const modal = screen.getByTestId('theme-picker');
    expect(modal.props.isVisible).toEqual(true);
    const darkItemComponent = screen.getByTestId('dark-item');
    fireEvent.press(darkItemComponent);
    expect(setIsVisible).toBeCalledWith(false);
  });

  test('Theme Picker Select Light Theme Functionality Test', () => {
    const setIsVisible = jest.fn();
    const screen = render(
      <TestProvider>
        <ThemePicker isVisible={true} setIsVisible={setIsVisible} />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
    const modal = screen.getByTestId('theme-picker');
    expect(modal.props.isVisible).toEqual(true);
    const lightItemComponent = screen.getByTestId('light-item');
    fireEvent.press(lightItemComponent);
    expect(setIsVisible).toBeCalledWith(false);
  });

  test('Theme Picker Select System Theme Functionality Test', () => {
    const setIsVisible = jest.fn();
    const screen = render(
      <TestProvider>
        <ThemePicker isVisible={true} setIsVisible={setIsVisible} />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
    const modal = screen.getByTestId('theme-picker');
    expect(modal.props.isVisible).toEqual(true);
    const systemItemComponent = screen.getByTestId('system-item');
    fireEvent.press(systemItemComponent);
    expect(setIsVisible).toBeCalledWith(false);
  });
});
