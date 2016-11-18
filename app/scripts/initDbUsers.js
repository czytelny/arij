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
    .then(() => {
      logger.info("'users' collection dropped");
      db.collection("users").insertOne(adminUser)
    })
    .then(() => {
      logger.info(`${adminUser.email} user added`);
      db.close();
    });
});

function makeAdminUser() {
  const name = "admin";
  const email = "admin@a.pl";
  const created_at = new Date();
  const updated_at = created_at;
  const password = bcrypt.hashSync("admin");
  const roles = ["read-all", "write-all", "update-all", "delete-all"];

  return {name, email, password, created_at, updated_at, roles};
}
