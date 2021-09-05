import {PayloadAction} from '@reduxjs/toolkit';
import {
  NativeSyntheticEvent,
  StatusBarStyle,
  TextInputKeyPressEventData,
  TextInputSelectionChangeEventData,
} from 'react-native';
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
    tabBarInactiveTintColor?: string;
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

/*
 * Redux state and actions type definitions
 */

export type ITheme = 'dark' | 'light' | undefined;

export interface ISettings {
  theme: ITheme;
}

export interface INote {
  id: string;
  text: string;
  title: string;
  favorite: boolean;
  archived: boolean;
  createdAt: number;
}

export interface INoteUpdate {
  id: string;
  text?: string;
  title?: string;
  favorite?: boolean;
  archived?: boolean;
}

export interface INotes extends Array<INote> {}

export interface IPopup {
  show: boolean;
  type: PopupType;
  message: string;
}

export interface IReduxSate {
  notes: INotes;
  settings: ISettings;
}

export interface IAddNoteAction extends PayloadAction<INote> {}

export interface IUpdateNoteAction extends PayloadAction<INoteUpdate> {}

export interface IDeleteNoteAction extends PayloadAction<Partial<string>> {}

export type ICombinedState = CombinedState<IReduxSate> | undefined;

export type IReducers = Reducer<CombinedState<IReduxSate>, AnyAction>;

/*
 * Routes params type definitions
 */

export interface IEditorRoute {
  key: string;
  name: string;
  params?: {noteId: string};
}

export type ISelectionChangeEvent =
  NativeSyntheticEvent<TextInputSelectionChangeEventData>;

export type IonKeyPressEvent = NativeSyntheticEvent<TextInputKeyPressEventData>;

export interface IMatch {
  content: string;
  start: number;
}

export interface IMatches extends Array<IMatch> {}
