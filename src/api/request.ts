import axios from "axios";

const service = axios.create({
  timeout: 60 * 1000, // request timeout
  headers: { "Content-Type": "application/json" },
  baseURL: ''
});
// request interceptor
service.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    // if (response.headers.authorization) {
    //   setToken(response.headers.authorization)
    // }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
