const express = require('express');
const mongoose = require('mongoose');
const database = require('./config/databaseConfig');

const app = express();


mongoose.connect(database.url, function (err) {
  if (err) throw err;
  console.log('Connection established');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
