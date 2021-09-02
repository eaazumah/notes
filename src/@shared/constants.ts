import {StatusBarStyle} from 'react-native';

export const colors = {
  grey: '#E1E0DF',
  white: '#FFFFFF',
  success: '#5cb85c',
  danger: '#d9534f',
  black: '#242A37',
  primary: '#3269ff',
  secondary: '#FF00FF',
};

export const lightTheme = {
  primary: '#3269ff',
  secondary: '#F25F5C',
  primaryText: '#242A37',
  secondaryText: '#E1E0DF',
  backgroundColor: '#F5F5F5',
  surface: '#E1E0DF',
  barStyle: 'dark-content' as StatusBarStyle,
  tabBarOptions: {
    tabBarActiveTintColor: '#3269ff',
    // tabBarInactiveTintColor: 'grey',
    tabBarStyle: {
      backgroundColor: '#FFFFFF',
    },
  },
};

export const darkTheme = {
  primary: '#3269ff',
  secondary: '#F25F5C',
  primaryText: '#FFFFFF',
  secondaryText: '#E1E0DF',
  backgroundColor: '#151515',
  surface: '#272727',
  barStyle: 'light-content' as StatusBarStyle,
  tabBarOptions: {
    tabBarActiveTintColor: '#3269ff',
    // tabBarInactiveTintColor: '#E1E0DF',
    tabBarStyle: {
      backgroundColor: '#151515',
    },
  },
};

export const routes = {
  home: 'Home',
  editor: 'Editor',
  splash: 'Splash',
  archived: 'Archived',
  favorites: 'Favorites',
  bottomTab: 'BottomTab',
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};
