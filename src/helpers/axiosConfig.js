import axios from 'axios';

axios.defaults.baseURL = 'https://phonebook-api-backend-v92w.onrender.com/api';

// axios.defaults.baseURL = 'http://localhost:8080/api';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const cleanAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export default axios;
