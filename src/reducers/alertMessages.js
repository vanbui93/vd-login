import * as types from './../constant/alert';
import shortid from 'shortid';

var initialState = {
  id:'',
  type:'',
  message: ''
}

const alertMessages = (state = initialState, action) => {
  switch (action.type) {
    case types.ALERT_SUCCESS: 
    return {
      id: shortid.generate(),
      type: action.message.type,
      message: action.message.message,
    };
    case types.ALERT_ERROR: 
    return {
      id: shortid.generate(),
      type: action.message.type,
      message: action.message.message,
    };
    case types.ALERT_CLEAR: 
    return {};
    default:
      return state
  }
}

export default  alertMessages