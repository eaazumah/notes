import R from 'ramda';
import {
  IAddNoteAction,
  IDeleteNoteAction,
  INotes,
  IUpdateNoteAction,
} from '../../@types';

export const reset = () => [];

export const addNote = (state: INotes, action: IAddNoteAction) => {
  return R.uniqBy(R.prop('id'), [...state, action.payload]);
};

export const updateNote = (state: INotes, action: IUpdateNoteAction) => {
  return state.map(item => {
    if (item.id === action.payload.id) {
      return {
        ...item,
        ...action.payload,
      };
    } else {
      return item;
    }
  });
};

export const cleanNotes = (state: INotes) => {
  return state.filter(item => Boolean(item.text || item.title));
};

export const deleteNote = (state: INotes, action: IDeleteNoteAction) => {
  return state.filter(item => item.id !== action.payload);
};
