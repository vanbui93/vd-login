import * as types from './../constant/alert';

var initialState = {
  type:'',
  message: ''
}

const alertMessages = (state = initialState, action) => {
  switch (action.type) {
    case types.ALERT_MESSAGE: 
    return {
      type: action.message.type,
      message: action.message.message
    }

    default:
      return state
  }
}

export default  alertMessages