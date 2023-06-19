import { combineReducers } from 'redux';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counter from './counter/reducer'
import user from './user/reducer'
const persistConfig = {
  key: 'root',
  storage,
};
const combineReducer = combineReducers({
  counter,
  user,
});
const persistedReducer = persistReducer(persistConfig, combineReducer);
export default persistedReducer;