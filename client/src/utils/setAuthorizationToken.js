import axios from 'axios';

//thêm Authorization vào trong header của network
export default function setAuthorizationToken(token) {
  if (token) { //kiểm tra, nếu đã có token rồi, tức đã đăng nhập trước đó rồi thì thực hiện thêm Authorization vào trong Network
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else { 
    delete axios.defaults.headers.common['Authorization'];
  }
}