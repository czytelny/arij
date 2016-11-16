import mongoose from 'mongoose';
import dbConfig from './config/databaseConfig';
import logger from 'winston';


module.exports = mongoose.connect(dbConfig.url, function (err) {
  if (err) throw Error(`Can't establish connection with MongoDB on: ${dbConfig.url}`);
  logger.info('Connection to MongoDB established');
});
