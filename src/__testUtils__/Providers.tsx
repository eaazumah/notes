import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import useTheme from '../@shared/hooks/useTheme';
import {store} from '../@shared/redux/store';

interface IReduxProvider {
  children?: React.ReactNode;
}

export const TestReduxProvider = ({children}: IReduxProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

interface ITestThemeProvider {
  children: React.ReactNode;
}

export const TestThemeProvider = ({children}: ITestThemeProvider) => {
  const {theme} = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface ITestProviders {
  children: React.ReactNode;
}

const TestProvider = ({children}: ITestProviders) => {
  return (
    <TestReduxProvider>
      <TestThemeProvider>{children}</TestThemeProvider>
    </TestReduxProvider>
  );
};

export default TestProvider;
