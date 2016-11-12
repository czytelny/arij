/**
 * Purpose of this script is to add to a MongoDB initial 'admin' user.
 * Credentials is admin@a.pl/admin
 * This script should be triggered manually.
 * It should be also also bundled in the final installation script.
 */

const dbConfig = require('./../config/databaseConfig');
const MongoClient = require('mongodb').MongoClient;
const logger = require('winston');
const bcrypt = require("bcryptjs");

MongoClient.connect(dbConfig.url, function (err, db) {
  if (err) throw err;
  logger.info("Successfully connected to MongoDb");
  const adminUser = makeAdminUser();
  db.collection("users").drop()
    .then(()=> {
      logger.info("'users' collection dropped");
      db.collection("users").insertOne(adminUser)
    })
    .then(()=> {
      logger.info(`${adminUser.email} user added`);
      db.close();
    });
});

function makeAdminUser() {
  var name = "admin";
  var email = "admin@a.pl";
  var created_at = new Date();
  var updated_at = created_at;
  var password = bcrypt.hashSync("admin");

  return {name, email, password, created_at, updated_at};
}
