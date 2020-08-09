import { combineReducers } from 'redux';
import alertMessages from './alertMessages';
import auth from './auth';

export default combineReducers({
  alertMessages,
  auth,
})