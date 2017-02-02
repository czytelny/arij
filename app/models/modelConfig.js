const mongoose = require('mongoose')

module.exports = {
  setConfig: function () {
    mongoose.Promise = global.Promise
  }
}
