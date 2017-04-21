// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue';
import { sync } from 'vuex-router-sync'
import Vuelidate from 'vuelidate'
import Multiselect from 'vue-multiselect'
import VTooltip from 'v-tooltip'


import App from './App';
import router from './router';
import store from './store/store'
import dateFilter from './utils/filters';
import notifications from './plugins/Notifications'

if (process.env.NODE_ENV !== 'production') {
  axios.defaults.baseURL = "http://localhost:3030";
  axios.defaults.headers = {"Access-Control-Allow-Credentials": true};
} else {
  axios.defaults.baseURL = "";
}

axios.defaults.withCredentials = true;

sync(store, router)

Vue.use(Vuelidate)
Vue.use(notifications)
Vue.use(VTooltip)

// Global Components
Vue.component('multiselect', Multiselect)

// Global filters
Vue.filter('date', dateFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store,
});
