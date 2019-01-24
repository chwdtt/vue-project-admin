import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入全局scss
import './styles/reset.scss';
import './styles/common.scss';


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
