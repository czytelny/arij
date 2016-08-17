const express = require('express');
const mongoose = require('mongoose');
const database = require('./config/databaseConfig');

const app = express();
const PORT = process.env.PORT || 3030;

// ------- database
mongoose.connect(database.url, function (err) {
  if (err) throw err;
  console.log('Connection to MongoDB established');
});

// ------- routes
app.use(express.static('public'));
require('./app/routes')(app);


app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT);
});
