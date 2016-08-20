"use strict";

function addTimestamp() {
  let currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  return this;
}

module.exports = {
  addTimestamp: addTimestamp
};
