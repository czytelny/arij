import mongoose from 'mongoose';
import database from './config/databaseConfig';
import logger from 'winston';


module.exports = mongoose.connect(database.url, function (err) {
  if (err) throw Error(`Can't establish connection with MongoDB on: ${database.url}`);
  logger.info('Connection to MongoDB established');
});
