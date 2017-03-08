import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/pages/Hello';
import SystemSettingsPage from 'components/pages/SystemSettingsPage';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/systemSettings',
      name: 'systemSettings',
      component: SystemSettingsPage,
    },
  ],
});
