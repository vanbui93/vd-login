import axios from "axios";

export function userSignUpRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:3330/api/users', userData)
  }
}