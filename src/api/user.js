import axios from 'axios';

export const apiLogin = request_data => {
  return axios.post('/users/authentication', request_data);
};

export const apitFetchProfile = () => {
  return axios.get('/users/profile');
}