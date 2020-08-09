import axios from 'axios';
import setAuthorizationToken from './../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../constant/user';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user,
    }
}

export function userLoginRequest (userData) {
    return dispatch => {
        return axios.get('http://localhost:3000/users', userData).then(res => {
            const token = JSON.stringify(res.data[0]);
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token); //đưa data lấy được từ server vào setAuthorizationToken

            // lưu ý: chỉ sử dụng giải mã jwtDecode khi backend đã mã hóa trước đó
            // console.log(jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhbmJ1aSIsImVtYWlsIjoidmFuLmJ0LjM4QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwicGFzc3dvcmRDb25maXJtYXRpb24iOiIxMjM0NTYiLCJ0aW1lem9uZSI6IlBhY2lmaWMvUGFnb19QYWdvIiwiY2hrYlN0YXR1cyI6dHJ1ZSwiaWQiOjF9.2wt4-3oCf7sIp2um7SxibN63I8xyCuz4tB48RamDgQI')); //giải mã hóa username,password
            // dispatch(setCurrentUser(jwtDecode(token))); 

            dispatch(setCurrentUser(token));
        });
    }
}