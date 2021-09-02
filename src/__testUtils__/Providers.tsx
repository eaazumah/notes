import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import useTheme from '../@shared/hooks/useTheme';
import {store} from '../@shared/redux/store';

interface IReduxProvider {
  children?: React.ReactNode;
}

export const TextReduxProvider = ({children}: IReduxProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

interface ITestThemeProvider {
  children: React.ReactNode;
}

export const TestThemeProvider = ({children}: ITestThemeProvider) => {
  const {theme} = useTheme();
  return (
    <TextReduxProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TextReduxProvider>
  );
};

interface ITestProviders {
  children: React.ReactNode;
}

const TextProvider = ({children}: ITestProviders) => {
  return (
    <TextReduxProvider>
      <TestThemeProvider>{children}</TestThemeProvider>
    </TextReduxProvider>
  );
};

export default TextProvider;
