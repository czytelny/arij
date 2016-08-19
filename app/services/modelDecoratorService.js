"use strict";

function addTimestamp(modelObj) {
  let currentDate = new Date();
  modelObj.updated_at = currentDate;
  if (!modelObj.created_at) {
    modelObj.created_at = currentDate;
  }
}

module.exports = {
  addTimestamp: addTimestamp
};