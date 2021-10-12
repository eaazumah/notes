// import { useRoute } from '@react-navigation/core';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import Editor from '../Editor';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({
      key: 'string',
      name: 'string',
      params: {noteId: 'string'},
    }),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('Editor', () => {
  test('Editor renders correctly', () => {
    const screen = render(
      <TestProvider>
        <Editor />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('Editor functionality test', async () => {
    const screen = render(
      <TestProvider>
        <Editor />
      </TestProvider>,
    );
    expect(screen.queryByTestId('note-input')).toBeNull();

    const toggleEdit = screen.queryByTestId('toggle-edit');
    expect(toggleEdit).toBeTruthy();
    fireEvent.press(toggleEdit!);

    expect(screen.queryByTestId('note-input')).toBeTruthy();
  });
});
