"use strict";

var expect = require('chai').expect;
var modelDecoratorService = require('./modelDecoratorService');

describe("modelDecoratorService", function () {
  describe("addTimestamp()", function () {
    it("should add created_at property to model if it's not exist", () => {
      //given
      let modelObj = {};

      //when
      modelDecoratorService.addTimestamp.call(modelObj);

      //then
      expect(modelObj.created_at).to.not.be.undefined;
      expect(modelObj.updated_at).to.not.be.undefined;
    });

    it("should not modify created_at if it exist, but modify updated_at", () => {
      //given
      let someDate = "stringDate";
      let modelObj = {
        created_at: someDate,
        updated_at: someDate
      };

      //when
      modelDecoratorService.addTimestamp.call(modelObj);

      //then
      expect(modelObj.created_at).to.equal(someDate);
      expect(modelObj.updated_at).to.not.equal(someDate);
    })
  });
});
