"use strict";

const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const logger = require('winston');
const modelConfig = require('./models/modelConfig');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);
const PORT = process.env.PORT || 3030;

import database from './database'
import userController from './controllers/userController'
import projectController from './controllers/projectController'

const userCtrl = userController(io);
const projectCtrl = projectController(io);
app.use(express.static(path.join(__dirname, 'public')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

modelConfig.setConfig();

// ------- controllers
const routes = require('./controllers/restController');
app.use('/', routes);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


server.listen(PORT, function () {
  logger.info('Arij served on port: ' + PORT);
});
