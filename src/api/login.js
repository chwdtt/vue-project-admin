import request from '@/utils/http';

export function loginByUsername(username, password) {
	const data = {
		username,
		password
	};
	return request({
		method: 'post',
		url: '/user/login',
		data: data
	});
}