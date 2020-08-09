import axios from 'axios';

export function userLoginRequest (userData) {
    return dispatch => {
        return axios.get('http://localhost:3000/users', userData).then(res => {
            const token = res.data;
            localStorage.setItem('jwtToken', JSON.stringify(token));
        });
    }
}