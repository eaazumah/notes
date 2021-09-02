import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {themes} from '../@shared/constants';
import {store} from '../@shared/redux/store';

interface IReduxProvider {
  children: React.ReactNode;
}

export const TextReduxProvider = ({children}: IReduxProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

interface ITestProviders {
  mode: 'light' | 'dark';
  children: React.ReactNode;
}

export const TestProviders = ({children, mode}: ITestProviders) => {
  return (
    <TextReduxProvider>
      <ThemeProvider theme={themes[mode]}>{children}</ThemeProvider>
    </TextReduxProvider>
  );
};

export default TestProviders;
