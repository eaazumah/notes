import {AnyAction} from 'redux';
import {ICombinedState, IReducers} from '../../@types';

const getRootReducer = (reducers: IReducers) => {
  return (state: ICombinedState, action: AnyAction) => reducers(state, action);
};

export default getRootReducer;
