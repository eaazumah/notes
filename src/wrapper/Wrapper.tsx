import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import useTheme from '../@shared/hooks/useTheme';

interface Props {
  [x: string]: ReactNode;
}

const Wrapper = (props: Props) => {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle={theme.barStyle}
        backgroundColor="transparent"
      />
      {props.children}
    </ThemeProvider>
  );
};

export default Wrapper;
