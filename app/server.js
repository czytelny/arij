"use strict";

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

const database = require('./config/databaseConfig');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);
const PORT = process.env.PORT || 3030;

import makeStore from './store/store';
import * as actions from './actions/usersActions';

const store = makeStore();
app.use(express.static(path.join(__dirname, 'public')));

// ------- database
mongoose.Promise = global.Promise;
mongoose.connect(database.url, function (err) {
  if (err) throw err;
  console.log('Connection to MongoDB established');
  store.dispatch(actions.getUserRequest("57b8acaffbac163c1c00f245"));
});

// ------- controllers
const routes = require('./controllers/restController');
const userRoutes = require('./controllers/userController')(io);
app.use('/', routes);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use('/users', userRoutes);


server.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});



