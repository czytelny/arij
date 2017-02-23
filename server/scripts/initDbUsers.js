/**
 * Purpose of this script is to add to a MongoDB initial 'admin' user.
 * Credentials is admin@a.pl/admin
 * This script should be triggered manually.
 * It should be also also bundled in the final installation script.
 */

const dbConfig = require('./../config/databaseConfig')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const logger = require('winston')
const bcrypt = require('bcryptjs')
const accessControl = require('./../services/accessControl')

MongoClient.connect(dbConfig.url, function (err, db) {
  if (err) throw err
  logger.info('Successfully connected to MongoDb')
  const adminUser = makeAdminUser()
  const user = makeUser()
  const userCollection = db.collection('users')

  userCollection
    .drop()
    .then(() => {
      logger.info("'users' collection dropped")
      return db.collection('users').insert([adminUser, user])
    }, () => {
      logger.warn("can't drop collection users")
      return db.collection('users').insert([adminUser, user])
    }
    )
    .then(() => {
      logger.info(`${adminUser.email} and ${user.email}  added`)
      db.close()
    }).catch(() => {
      logger.error("can't add initial users")
    })
})

function makeAdminUser () {
  const _id = new ObjectID("5895adafa179991ac84e7793");
  const nickName = "azaliasz";
  const name = 'admin'
  const email = 'admin@a.pl'
  const created_at = new Date()
  const updated_at = created_at
  const password = bcrypt.hashSync('admin')
  const roles = [accessControl.roles.admin, accessControl.roles.user]
  const active = true


  return {_id, nickName, name, email, password, created_at, updated_at, roles, active}
}

function makeUser () {
  const _id = new ObjectID("5895adafa179991ac84e7794");
  const name = 'user'
  const nickName = "babaliasz";
  const email = 'user@a.pl'
  const created_at = new Date()
  const updated_at = created_at
  const password = bcrypt.hashSync('user')
  const roles = [accessControl.roles.user]
  const active = true

  return {_id, nickName, name, email, password, created_at, updated_at, roles, active}
}
