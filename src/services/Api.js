import axios from 'axios';

import StoredUser from './StoredUser';
import FastJsonapiRecordFactory from './FastJsonapiRecordFactory';

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

instance.interceptors.response.use(response => {
  const responseData = response.data;

  if (responseData.meta && responseData.meta.serializer){
    let serializedData;

    switch(responseData.meta.serializer) {
      case 'FastJsonapiSerializer':
        serializedData = new FastJsonapiRecordFactory(responseData.meta.model, responseData.data, responseData.included);
        break;
      default:
        console.log('Serializer not found');
    }

    response.serializedData = serializedData;
  }

  return response;
});

export default instance;
