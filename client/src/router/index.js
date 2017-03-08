import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/pages/Hello';
import ProjectsSettingsPage from 'components/pages/settings/ProjectsSettingsPage';
import UsersSettingsPage from 'components/pages/settings/UsersSettingsPage';


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
      path: '/settings/projects',
      component: ProjectsSettingsPage,
    },
    {
      path: '/settings/users',
      component: UsersSettingsPage,
    },
  ],
});
