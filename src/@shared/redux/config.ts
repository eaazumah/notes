import AsyncStorage from '@react-native-async-storage/async-storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';

export const persistConfig: PersistConfig<any, any, any, any> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

export const middlewareConfig = {
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PURGE, PERSIST, REGISTER, REHYDRATE],
  },
};
