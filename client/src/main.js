import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './App.vue';
import store from './store/store';
import { routes } from './routes';

// import 'materialize-css/dist/css/materialize.css';
// import 'materialize-css/js/hammer.min.js';
// import 'materialize-css/dist/js/materialize.min.js';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.validateStatus = false;

axios.interceptors.request.use(config => {
  if (store.getters.isAuthenicated) {
    config.headers['x-access-token'] = store.getters.getToken;
  }
  
  return config;
}, error => {
  return Promise.reject(error);
});

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters.isAuthenicated) {
    next({
      path: '/login'
    });
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
