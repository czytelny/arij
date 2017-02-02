const {expect} = require('chai')
const modelDecoratorService = require('./modelDecoratorService')

describe('modelDecoratorService', function () {
  describe('addTimestamp()', function () {
    it("should add created_at property to model if it's not exist", () => {
      // given
      let modelObj = {}

      // when
      modelDecoratorService.addTimestamp.call(modelObj)

      // then
      expect(modelObj.created_at).to.not.be.an('undefined')
      expect(modelObj.updated_at).to.not.be.an('undefined')
    })

    it('should not modify created_at if it exist, but modify updated_at', () => {
      // given
      let someDate = 'stringDate'
      let modelObj = {
        created_at: someDate,
        updated_at: someDate
      }

      // when
      modelDecoratorService.addTimestamp.call(modelObj)

      // then
      expect(modelObj.created_at).to.equal(someDate)
      expect(modelObj.updated_at).to.not.equal(someDate)
    })
  })
})
