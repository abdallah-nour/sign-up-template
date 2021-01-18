import axios from 'axios';
const axiosInstance = () => {
  let token = window.localStorage.getItem('token');
  // console.log('TOKEN/', token);
  return axios.create({
    baseURL: 'https://fake-api-ahmed.herokuapp.com',
    headers: { authorization: +`Bearer: ${token}` }
  })
}
export default axiosInstance;