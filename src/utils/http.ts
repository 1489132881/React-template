//封装axios
import { message } from 'antd';
import axios from 'axios';
export function createHttp() {
  //创建axios实例
  const $http = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: Number(process.env.TIMEOUT)
  });

  //请求拦截器，添加token
  $http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    const appAuth = config.headers['AppAuth'] || ''; // 从配置中获取权限
    if (token) {
      config.headers.AppAuth = appAuth;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // 响应拦截器，处理响应数据
  $http.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        return response;
      }
      if (response.status === 401) {
        //  重定向登录页
        return Promise.reject(response);
      }

      message.error(response.data.message ?? '请求失败');
      return Promise.reject(response);
    },
    (error) => {
      message.error(error.message ?? '请求失败');
      return Promise.reject(error);
    }
  );
}

const $http = createHttp();

export { $http };
