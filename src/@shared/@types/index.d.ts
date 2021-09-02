import {StatusBarStyle} from 'react-native';
import {AnyAction, CombinedState, Reducer} from 'redux';
import 'styled-components';

export interface Theme {
  primary: string;
  secondary: string;
  primaryText: string;
  secondaryText: string;
  backgroundColor: string;
  surface: string;
  barStyle: StatusBarStyle;
  tabBarOptions: {
    tabBarActiveTintColor: string;
    tabBarInactiveTintColor: string;
    tabBarStyle: {
      backgroundColor: string;
    };
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export type IconType =
  | 'FontAwesome'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export type ISearchFilter = {
  name: string;
  price: number;
  radius: number;
  tags: Array<string> | [];
};

export type ITheme = 'dark' | 'light' | undefined;

export interface ISettings {
  theme: ITheme;
}

export type PopupType =
  | 'ERROR'
  | 'SUCCESS'
  | 'LOADING'
  | 'LOGOUT'
  | 'RATING'
  | 'ALERT'
  | 'MESSAGE'
  | 'TOGGLE_THEME'
  | 'SEARCH'
  | undefined
  | null;

export interface IPopup {
  show: boolean;
  type: PopupType;
  message: string;
}

export interface IReduxSate {
  settings: ISettings;
}

type ICombinedState = CombinedState<IReduxSate> | undefined;

type IReducers = Reducer<CombinedState<IReduxSate>, AnyAction>;
