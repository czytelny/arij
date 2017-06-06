import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/pages/Hello';
import ProjectsSettingsPage from 'components/pages/settings/projects/ProjectsSettingsPage';
import AddProjectsSettingsPage from 'components/pages/settings/projects/AddProjectsSettingsPage';
import UsersSettingsPage from 'components/pages/settings/users/UsersSettingsPage';
import AddUsersSettingsPage from 'components/pages/settings/users/AddUsersSettingsPage';


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
