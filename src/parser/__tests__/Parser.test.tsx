import {render} from '@testing-library/react-native';
import React from 'react';
import TestProvider from '../../__testUtils__/Providers';
import Parser from '../Parser';

describe('Parser', () => {
  test('Parser renders correctly', () => {
    const text = 'My note';
    const screen = render(
      <TestProvider>
        <Parser text={text} maxHeight={100} />
      </TestProvider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
