const dbConfig = require('./../config/databaseConfig')
const MongoClient = require('mongodb').MongoClient
const logger = require('winston')

MongoClient.connect(dbConfig.url, function (err, db) {
  if (err) throw err
  logger.info('Successfully connected to MongoDb')
  const firstRole = {name: "user"}
  const secondRole = {name: "admin"}
  const rolesCollection = db.collection('roles')

  rolesCollection
    .drop()
    .then(() => {
        logger.info("'roles' collection dropped")
        return rolesCollection.insert([
          firstRole, secondRole
        ])
      }, () => {
        logger.warn("can't drop collection 'roles'")
        return rolesCollection.insert([
          firstRole, secondRole
        ])
      }
    )
    .then(() => {
      logger.info(`${firstRole.name} and ${secondRole.name} added`)
      db.close()
    }, () => {
      logger.error("can't add initial rolesls")
    })
})
