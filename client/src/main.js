// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import Vue from 'vue';
import { sync } from 'vuex-router-sync'
import App from './App';
import router from './router';
import store from './store/store'

if (process.env.NODE_ENV !== 'production') {
  axios.defaults.baseURL = "http://localhost:3030";
  axios.defaults.headers = {"Access-Control-Allow-Credentials": true};
}

axios.defaults.withCredentials = true;

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store,
});
