const mongoose = require('mongoose');
const dbConfig = require('./config/databaseConfig');
const logger = require('winston');


module.exports = mongoose.connect(dbConfig.url, function (err) {
  if (err) throw Error(`Can't establish connection with MongoDB on: ${dbConfig.url}`);
  logger.info('Connection to MongoDB established');
});
