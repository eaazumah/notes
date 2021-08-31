import {StatusBarStyle} from 'react-native';
import {AnyAction, CombinedState, Reducer} from 'redux';
import 'styled-components';

export interface Theme {
  black: string;
  primary: string;
  secondary: string;
  primaryText: string;
  secondaryText: string;
  motorbike: string;
  star: string;
  backgroundColor: string;
  surface: string;
  grey: string;
  barStyle: StatusBarStyle;
  white: string;
  tabBarOptions: {
    inactiveTintColor: string;
    activeTintColor: string;
    style: {
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
  | 'Zocial'
  | undefined;

export type ISearchFilter = {
  name: string;
  price: number;
  radius: number;
  tags: Array<string> | [];
};

export interface ISettings {
  theme: 'dark' | 'light';
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
