import axios from 'axios';

export const baseURL = (axios.defaults.baseURL = 'https://connections-api.goit.global');

export const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const cleanAuthHeader = () => (axios.defaults.headers.common.Authorization = '');
