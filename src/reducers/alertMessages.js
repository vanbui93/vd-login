import * as types from './../constant/alert';
import shortid from 'shortid';

var initialState = {
  id:'',
  type:'',
  message: ''
}

const alertMessages = (state = initialState, action) => {
  switch (action.type) {
    case types.ALERT_MESSAGE: 
    return {
      id: shortid.generate(),
      type: action.message.type,
      message: action.message.message
    }

    default:
      return state
  }
}

export default  alertMessages