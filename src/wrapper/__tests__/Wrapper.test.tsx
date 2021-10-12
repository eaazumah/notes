import {render} from '@testing-library/react-native';
import React from 'react';
import {TestReduxProvider} from '../../__testUtils__/Providers';
import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  test('Wrapper renders correctly', () => {
    const wrapper = render(
      <TestReduxProvider>
        <Wrapper />
      </TestReduxProvider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
