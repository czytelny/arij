import {render} from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import socketIO from 'socket.io-client';

import MainView from './app/mainView';
import UserView from './user/userView';
import UserListView from './user/userList/userListView';

// var socket = socketIO.connect('http://localhost:3030');
// socket.emit("users:post", {name: 'czeslaw', email: 'czeslaw@wp.pl', password: 'aaa'});
// socket.on('users:post:response', function (msg) {
//   console.log(msg);
// });

render(
  <Router history={hashHistory}>
    <Route path="/" component={MainView}/>
    <Route path="/user" component={UserListView}/>
    <Route path="/user/new" component={UserView}/>
  </Router>,
  document.getElementById('app')
);
