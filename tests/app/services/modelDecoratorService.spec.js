var modelDecoratorService = require('./../../../app/services/modelDecoratorService');

describe("modelDecoratorService", function () {
  describe("addTimestamp()", function () {
    it("should add created_at property to model if it's not exist", function () {
      //given
      let modelObj = {};

      //when
      modelDecoratorService.addTimestamp(modelObj);

      //then
      expect(modelObj.created_at).toBeDefined();
      expect(modelObj.updated_at).toBeDefined();
    });

    it("should not modify created_at if it exist, but modify updated_at", function () {
      //given
      let someDate = "stringDate";
      let modelObj = {
        created_at: someDate,
        updated_at: someDate
      };

      //when
      modelDecoratorService.addTimestamp(modelObj);

      //then
      expect(modelObj.created_at).toEqual(someDate);
      expect(modelObj.updated_at).not.toEqual(someDate);
    })
  });
});