"use strict";

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const database = require('./config/databaseConfig');

const app = express();
const PORT = process.env.PORT || 3030;

// ------- setup for all environments
app.use(express.static(path.join(__dirname, 'public')));

// ------- database
mongoose.Promise = global.Promise;
mongoose.connect(database.url, function (err) {
  if (err) throw err;
  console.log('Connection to MongoDB established');
});

// ------- routes
const routes = require('./app/routes/routes');
const userRoute = require('./app/routes/userRoutes');
app.use('/', routes);
app.use('/users', userRoute);


app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});
