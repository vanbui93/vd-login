import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import * as Types from '../constant/user';
import * as userApis from '../apis/auth';
import { history } from './../helpers/history';


export function setCurrentUser(user) {
    return {
        type: Types.SET_CURRENT_USER,
        user,
    }
}

export function logoutActions() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
        // history.push('/login');
    }
}

//CÁC BƯỚC XÁC THỰC NGƯỜI DÙNG LOGIN
//B1: Client: Browser người dùng post user/login với username và password
//B2: Server: Tạo 1 JWT dưới dạng mã hóa decode
//B3: Server: Trả về 1 JWT cho Client
//B4: Client: gửi 1 JWT Authorization lên server dưới dạng chữ kí signature ở header
     //đưa data lấy được từ server vào set Authorization Token để đưa vào header(network)
//B5: Server: Kiểm tra chữ kí JWT hợp lệ sẽ trả về response
//B6: Server: Trả về 1 RESPONSE cho client


export function userLoginRequest(user) {
    return dispatch => {
        userApis.getUser(user) //B1
        .then(res => {
            const token = JSON.stringify(res.data.token);           //B2
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);              //B4

            // console.log(jwtDecode(token)); //log thử xem giải mã được chưa nào

            // lưu ý: chỉ sử dụng giải mã jwtDecode khi backend đã mã hóa trước đó
            dispatch(setCurrentUser(jwtDecode(token))); 
            
            // dispatch(setCurrentUser(token));
        });
    }
}


export function userSignUpRequest(user) {
return dispatch => {
    // userApis.register(user)
    return axios.post('http://localhost:3330/api/users/register', user)
}
}