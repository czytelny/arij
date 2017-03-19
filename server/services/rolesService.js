const Roles = require('../models/rolesModel')
const logger = require('winston')

function findAll(){
  logger.debug('roles: find all roles')
  return Roles.find()
}

function save (objectToSave) {
  logger.debug(`roles: saving: ${JSON.stringify(objectToSave)}`)
  return new Roles(objectToSave).save()
}

module.exports = {
  findAll,
  save
}
