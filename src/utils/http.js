import axios from 'axios';

const service = axios.create({
    baseURL: '/',
    timeout: 5000
});


// 添加请求拦截器
axios.interceptors.request.use( config => {
    // todos 获取token，在headers中设置token
    config.headers['sessionId'] = 123;
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject( error );
});


// 添加响应拦截器
axios.interceptors.response.use( response => {
    // 对响应数据做点什么
    return response;
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default service;

