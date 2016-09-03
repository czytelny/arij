import {render} from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import socketIO from 'socket.io-client';

import MainView from './app/mainView';
import UserView from './user/userView';

// var socket = socketIO.connect('http://localhost:3030');
// socket.emit("users:post", {name: 'czeslaw', email: 'czeslaw@wp.pl', password: 'aaa'});
// socket.on('users:post:response', function (msg) {
//   console.log(msg);
// });

render(
  <Router history={hashHistory}>
    <Route path="/" component={MainView}/>
    <Route path="/user" component={UserView}/>
  </Router>,
  document.getElementById('app')
);
