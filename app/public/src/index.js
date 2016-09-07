import {render} from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import { Router, Route, hashHistory } from 'react-router'


import MainView from './app/mainView';
import SettingsView from './settings/settingsView';
import UserView from './user/details/userView';
import UserListView from './user/userListView';

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainView}/>
      <Route path="/settings" component={SettingsView}/>
      <Route path="/settings/user" component={UserListView}/>
      <Route path="/settings/user/new" component={UserView}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
