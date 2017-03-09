const dbConfig = require('./../config/databaseConfig')
const MongoClient = require('mongodb').MongoClient
const logger = require('winston')

MongoClient.connect(dbConfig.url, function (err, db) {
  if (err) throw err
  logger.info('Successfully connected to MongoDb')
  const firstProject = {name: "1st Project", shortcut: "Angielka"}
  const secondProject = {name: "2nd Project", shortcut: "Migawka"}
  const projectCollection = db.collection('projects')

  projectCollection
    .drop()
    .then(() => {
        logger.info("'projects' collection dropped")
        return db.collection('projects').insert([
          makeProject(firstProject),
          makeProject(secondProject)
        ])
      }, () => {
        logger.warn("can't drop collection projects")
        return db.collection('projects').insert([
          makeProject(firstProject),
          makeProject(secondProject)
        ])
      }
    )
    .then(() => {
      logger.info(`${firstProject.name} and ${secondProject.name} added`)
      db.close()
    }, () => {
      logger.error("can't add initial projects")
    })
})


function makeProject({
  name,
  shortcut,
  users_id = [],
  tasks = [],
  activeBoard =[],
  draftBoards = [],
  backlog = [],
  active = true,
  created_at = new Date(),
  updated_at = new Date()
}) {
  return {
    name, shortcut, users_id, tasks, activeBoard, draftBoards, backlog, active, created_at, updated_at
  }
}
