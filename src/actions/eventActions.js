import axios from 'axios';

export function addNewEventAction(event) {
  return dispatch => {
    return axios.post('http://localhost:3000/events', event);
  };
} 