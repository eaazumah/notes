import {render} from '@testing-library/react-native';
import React from 'react';
import TestProviders from '../../../__testUtils__/Providers';
import Header from '../Header';

describe('Header', () => {
  test('Header renders correctly', () => {
    const header = render(
      <TestProviders>
        <Header title={'Home'} />
      </TestProviders>,
    );
    expect(header.toJSON()).toMatchSnapshot();
    const component = header.getByTestId('title');
    expect(component.children).toEqual(['Home']);
  });
});
