"use strict";

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

const database = require('./config/databaseConfig');
const modelConfig = require('./models/modelConfig');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);
const PORT = process.env.PORT || 3030;

import makeStore from './store';
import userController from './controllers/userController'

const store = makeStore();
const userCtrl = userController(io);
app.use(express.static(path.join(__dirname, 'public')));

// ------- database
modelConfig.setConfig();
mongoose.connect(database.url, function (err) {
  if (err) throw err;
  console.log('Connection to MongoDB established');
});

// ------- controllers
const routes = require('./controllers/restController');
app.use('/', routes);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


server.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});



