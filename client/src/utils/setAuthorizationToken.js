import axios from 'axios';

//thêm Authorization vào trong header của network
export default function setAuthorizationToken(token) {
  
  if (token) { 
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else { 
    delete axios.defaults.headers.common['Authorization'];
  }
}