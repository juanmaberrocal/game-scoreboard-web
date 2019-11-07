import axios from 'axios';

import StoredUser from './StoredUser';

let instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001"
});

instance.interceptors.request.use(config => {
  const token = StoredUser.getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default instance;
