import {PayloadAction} from '@reduxjs/toolkit';
import {ISettings} from '../../@types';

type Action = PayloadAction<Partial<ISettings>>;

export const updates = (state: ISettings, action: Action) => {
  return {...state, ...action.payload};
};
