//Đây là file tổng hợp gọi api
import axiosService from './axiosService';   //res trả về
import { API_ENDPOINT } from '../constant';    //locahost

//http://localhost:3330/api/auth
const url = 'auth';

//http://localhost:3330/auth   METHOD: post
export const getUser = (user) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, user);
}