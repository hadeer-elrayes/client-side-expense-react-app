import axios from 'axios';
const cs = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

export const apiLogin = request_data => {
  return axios.post(`${cs}/users/authentication`, request_data);
};

export const apiRegister = request_data => {
  return axios.post(`${cs}/users/register`, request_data);
};
export const apitFetchProfile = () => {
  return axios.get(`${cs}/users/profile`);
}