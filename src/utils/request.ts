

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
const baseUrl = import.meta.env.VITE_BASE_API;
const CancelToken = axios.CancelToken; // 用于axios取消请求

const request: AxiosInstance = axios.create({
  baseURL: baseUrl, //生产环境
  timeout: 7000
});
//请求拦截器  发请求之前，拦截器可以监测到
request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

//响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status > 400) {
      console.log("404！！！");
      
    }
    return response;
  },
  (err: any) => {
    Promise.reject(err);
  }
);

export default request;
