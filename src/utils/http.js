import axios from 'axios';
import store from '@/store';
import { getToken } from './auth';

const service = axios.create({
	baseURL: 'https://www.easy-mock.com/mock/5c47d920d78a504a6c37c038',
	timeout: 5000
});
// 添加请求拦截器
service.interceptors.request.use(config => {
	// todos 获取token，在headers中设置token
	if (store.getters.token) {
		config.headers['sessionId'] = getToken();
	}
	return config;
}, error => {
	// 对请求错误做些什么
	return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use(response => {
	// 对响应数据做点什么
	return response;
}, error => {
	// 对响应错误做点什么
	return Promise.reject(error);
});


export default service;

