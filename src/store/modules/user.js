import { getToken, setToken } from '@/utils/auth';
import { loginByUsername } from '@/api/login';
const user = {
	state: {
		username: 'admin',
		token: getToken()
	},

	mutations: {
		SET_TOKEN(state, token) {
			state.token = token;
		}
	},

	actions: {
		LoginByUsername({commit}, userInfo) {
			const username = userInfo.username.trim();
			return new Promise((resolve, reject) => {
				loginByUsername(username, userInfo.password).then(res => {
					let token = res.data.data.sessionId;
					commit(`SET_TOKEN`, token);
					setToken(token);
					resolve();
				}).catch(error => {
					reject(error);
				});
			});
		}
	}
};

export default user;