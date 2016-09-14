import {render} from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { Router, Route, browserHistory } from 'react-router'


import MainView from './app/mainView';
import SettingsView from './settings/settingsView';
import UserView from './settings/user/userView';
import UserListView from './settings/userList/userListView';
import ProjectListView from './settings/projectList/projectListView';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainView}/>
      <Route path="/settings" component={SettingsView}/>
      <Route path="/settings/user" component={UserListView}/>
      <Route path="/settings/user/new" component={UserView}/>
      <Route path="/settings/project" component={ProjectListView}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
