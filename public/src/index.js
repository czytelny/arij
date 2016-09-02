var ReactDOM = require('react-dom');
var React = require('react');
var socketIO = require('socket.io-client');
var Chat = require('./Chat');

// var socket = socketIO.connect('http://localhost:3030');
// socket.emit("users:post", {name: 'czeslaw', email: 'czeslaw@wp.pl', password: 'aaa'});
// socket.on('users:post:response', function (msg) {
//   console.log(msg);
// });


ReactDOM.render(
  <Chat />,
  document.getElementById('app')
);

