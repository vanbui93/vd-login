import axios from "axios";

//Viết riêng axios ở đây để dùng chung
class axiosService {

  constructor() {
    const instance = axios.create({});
    instance.interceptors.response.use(this.handleSusscess, this.handleError)
    this.instance = instance; //tạo ra 1 biến để gọi lại, sử dụng ngoài constructor
  }

  //khi gọi thành công
  handleSusscess(reponse) {
    return reponse;
  }

  //khi gọi bị lỗi
  handleError(error) {
    return Promise.reject(error);
  }

  //dùng để get url
  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body)
  }

  put(url, body) {
    return this.instance.put(url, body)
  }

  delete(url) {
    return this.instance.delete(url)
  }

}

export default new axiosService();
