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
  const userCollection = db.collection("users");
  userCollection.drop()
    .then(() => {
        logger.info("'users' collection dropped");
        return db.collection("users").insertOne(adminUser)
      }, () => {
        logger.warn("can't drop collection users");
        return db.collection("users").insertOne(adminUser)
      }
    )
    .then(() => {
      logger.info(`${adminUser.email} user added`);
      db.close();
    }).catch(() => {
    logger.error("can't add admin user");
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
