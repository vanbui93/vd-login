import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
// import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../constant/user';
// import * as userApis from '../apis/users';


export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user,
    }
}

export function logoutActions() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    }
}
//CÁC BƯỚC XÁC THỰC NGƯỜI DÙNG
//B1: Client: Browser người dùng post user/login với username và password
//B2: Server: Tạo 1 JWT dưới dạng mã hóa decode
//B3: Server: Trả về 1 JWT cho Client
//B4: Client: gửi 1 JWT Authorization lên server dưới dạng chữ kí signature ở header
     //đưa data lấy được từ server vào set Authorization Token để đưa vào header(network)
//B5: Server: Kiểm tra chữ kí JWT hợp lệ sẽ trả về response
//B6: Server: Trả về 1 RESPONSE cho client


export function userLoginRequest(user) {
    return dispatch => {
        axios.post('http://localhost:3330/api/users',user)   //B1
        .then(res => {
            const token = JSON.stringify(res.data);           //B2
            localStorage.setItem('jwtToken', token); 
            setAuthorizationToken(token);              //B4

            // lưu ý: chỉ sử dụng giải mã jwtDecode khi backend đã mã hóa trước đó
            // console.log(jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhbmJ1aSIsImVtYWlsIjoidmFuLmJ0LjM4QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwicGFzc3dvcmRDb25maXJtYXRpb24iOiIxMjM0NTYiLCJ0aW1lem9uZSI6IlBhY2lmaWMvUGFnb19QYWdvIiwiY2hrYlN0YXR1cyI6dHJ1ZSwiaWQiOjF9.2wt4-3oCf7sIp2um7SxibN63I8xyCuz4tB48RamDgQI')); //giải mã hóa username,password
            // dispatch(setCurrentUser(jwtDecode(token))); 

            dispatch(setCurrentUser(token));
        });
    }
}