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

const store = makeStore();
app.use(express.static(path.join(__dirname, 'public')));

// ------- database
modelConfig.setConfig();
mongoose.connect(database.url, function (err) {
  if (err) throw err;
  console.log('Connection to MongoDB established');
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



