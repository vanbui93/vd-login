import axios from "axios";

export function userSignUpRequest(userData) {
  return dispatch => {
    return axios.post('http://localhost:3000/api/users', userData)
  }
}
