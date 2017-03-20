import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/pages/Hello';
import ProjectsSettingsPage from 'components/pages/settings/ProjectsSettingsPage';
import AddProjectsSettingsPage from 'components/pages/settings/AddProjectsSettingsPage';
import UsersSettingsPage from 'components/pages/settings/UsersSettingsPage';
import AddUsersSettingsPage from 'components/pages/settings/AddUsersSettingsPage';


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
      path: '/settings/projects/add',
      component: AddProjectsSettingsPage,
    },
    {
      path: '/settings/users',
      component: UsersSettingsPage,
    },
    {
      path: '/settings/users/add',
      component: AddUsersSettingsPage,
    },
  ],
});
