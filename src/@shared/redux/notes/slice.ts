import {createSlice} from '@reduxjs/toolkit';
import {INotes} from '../../@types';
import * as reducers from './reducers';

const initialState: INotes = [];

export const slice = createSlice({
  initialState,
  name: 'notes',
  reducers: {
    ...reducers,
  },
});

export default slice.reducer;
// Action creators are generated for each case reducer function
export const notesActions = slice.actions;
