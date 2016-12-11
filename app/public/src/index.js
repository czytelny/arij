import 'babel-polyfill';
import 'whatwg-fetch'
import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store'
import {Router, Route, browserHistory} from 'react-router'


import MainView from './app/mainView';
import UserView from './settings/users/user/userView';
import UserListView from './settings/users/userList/userListView';
import ProjectListView from './settings/projectList/projectListView';
import ProjectView from './settings/project/projectView';
import ProjectRestListView from './settings/projects/projectList/ProjectRestListView';
import MessagesComponent from './app/messages/messagesComponent';

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={MainView}/>
        <Route path="/settings/users" component={UserListView}/>
        <Route path="/settings/user" component={UserView}/>
        <Route path="/settings/user/:userId" component={UserView}/>
        <Route path="/settings/project" component={ProjectListView}/>
        <Route path="/settings/project/new" component={ProjectView}/>
        <Route path="/settings/projects" component={ProjectRestListView}/>
      </Router>
      <MessagesComponent />
    </div>
  </Provider>,
  document.getElementById('app')
);
