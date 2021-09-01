import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {middlewareConfig, persistConfig} from './config';
import getMiddleware from './helpers/getMiddleware';
import getRootReducer from './helpers/getRootReducer';
import settings from './settings/slice';

const reducers = combineReducers({
  settings,
});

const rootReducer = getRootReducer(reducers);
const middleware = getMiddleware(middlewareConfig);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware,
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
