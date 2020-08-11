//Đây là file tổng hợp gọi api
import axiosService from './axiosService';   //res trả về
import { API_ENDPOINT } from './../constant';    //locahost

//http://localhost:3000/users
const url = 'users';

//http://localhost:3000/users   METHOD: GET
export const getListUser = (data) => {
  return axiosService.get(`${API_ENDPOINT}/${url}`, data);
}