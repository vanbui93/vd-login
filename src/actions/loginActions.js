import axios from 'axios';
import setAuthorizationToken from './../utils/setAuthorizationToken';

export function userLoginRequest (userData) {
    return dispatch => {
        return axios.get('http://localhost:3000/users', userData).then(res => {
            const token = JSON.stringify(res.data);
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token)
        });
    }
}