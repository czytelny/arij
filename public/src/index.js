import {render} from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'


import MainView from './app/mainView';
import SettingsView from './settings/settingsView';
import UserView from './user/userView';
import UserListView from './user/userList/userListView';

render(
  <Router history={hashHistory}>
    <Route path="/" component={MainView}/>
    <Route path="/settings" component={SettingsView}/>
    <Route path="/settings/user" component={UserListView}/>
    <Route path="/settings/user/new" component={UserView}/>
  </Router>,
  document.getElementById('app')
);
