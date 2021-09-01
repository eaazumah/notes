import {StatusBarStyle} from 'react-native';

export const colors = {
  grey: '#E1E0DF',
  white: '#FFFFFF',
  success: '#5cb85c',
  danger: '#d9534f',
  black: '#242A37',
  primary: '#FF7E00',
  secondary: '#FF00FF',
};

export const lightTheme = {
  primary: '#FF8C29',
  secondary: '#F25F5C',
  primaryText: '#242A37',
  secondaryText: '#E1E0DF',
  backgroundColor: '#F5F5F5',
  surface: '#E1E0DF',
  barStyle: 'dark-content' as StatusBarStyle,
  tabBarOptions: {
    inactiveTintColor: 'grey',
    activeTintColor: '#FF8C29',
    style: {
      backgroundColor: '#FFFFFF',
    },
  },
};

export const darkTheme = {
  primary: '#FF8C29',
  secondary: '#F25F5C',
  primaryText: '#FFFFFF',
  secondaryText: '#E1E0DF',
  backgroundColor: '#151515',
  surface: '#272727',
  barStyle: 'light-content' as StatusBarStyle,
  tabBarOptions: {
    inactiveTintColor: '#E1E0DF',
    activeTintColor: '#FF8C29',
    style: {
      backgroundColor: '#151515',
    },
  },
};

export const routes = {
  home: 'home',
  editor: 'editor',
  splash: 'splash',
  archived: 'archived',
  favorites: 'favorites',
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};
