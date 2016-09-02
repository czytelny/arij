var ReactDOM = require('react-dom');
var React = require('react');
var socketIO = require('socket.io-client');

import Header from './app/header'
import User from './user/user';

// var socket = socketIO.connect('http://localhost:3030');
// socket.emit("users:post", {name: 'czeslaw', email: 'czeslaw@wp.pl', password: 'aaa'});
// socket.on('users:post:response', function (msg) {
//   console.log(msg);
// });

ReactDOM.render(
  <User />,
  document.getElementById('app')
);

