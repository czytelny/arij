const logger = require('winston')
const httpStatus = require('http-status-codes')


function handleError (res, error, errorMsg) {
  logger.error(error);
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({errorMsg})
}

module.exports = {
  handleError
};
