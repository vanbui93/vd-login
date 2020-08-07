import { combineReducers } from 'redux';
import alertMessages from './alertMessages';

export default combineReducers({
  alert: alertMessages,
})