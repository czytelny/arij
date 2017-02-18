import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './store'

//Layouts
import MainLayout from './layouts/mainLayout';
import MainViewContent from './app/mainViewContent';
import MessagesComponent from './app/messages/messagesComponent';
import UserListContainer from './settings/users/userList/userListContainer';
import UserContainer from './settings/users/user/userContainer';
import ProjectContainer from './settings/project/projectContainer'
import ProjectListContainer from './settings/projectList/projectListContainer';



export default (
    <Provider store={store}>
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={MainLayout} >
            <IndexRoute component={MainViewContent} />
            <Route path="settings/">
              <Route path="users" component={UserListContainer} />
              <Route path="user" component={UserContainer} />
              <Route path="user/:userId" component={UserContainer}/>
              <Route path="projects" component={ProjectListContainer} />
              <Route path="projects/new" component={ProjectContainer} />
            </Route>
          </Route>
        </Router>
        <MessagesComponent />
      </div>
    </Provider>
);
