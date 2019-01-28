import Vue from 'vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/auth';


Vue.use(VueRouter);


const routes = [
	{
		path: '/',
		component: () => import('@/views/home')
	},
	{
		path: '/login',
		component: () => import('@/views/login')
	}
];


const router = new VueRouter({
	routes
});


router.beforeEach((to, from, next) => {
	let token = getToken();
	if (to.path === '/login') {
		next();
	} else {
		if (token) {
			next();
		} else {
			next({path: '/login'});
		}
	}
});


export default router;

