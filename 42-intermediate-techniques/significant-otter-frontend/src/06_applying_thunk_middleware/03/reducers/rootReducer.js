import { combineReducers } from 'redux';
import authReducer from './authReducer';
import adReducer from './adReducer';

export default combineReducers({
  auth: authReducer,
  ads: adReducer
})
