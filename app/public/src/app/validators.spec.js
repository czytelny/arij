import {expect} from 'chai';
import {Map, fromJS} from 'immutable';

import {isFormValid} from './validators'

describe("validators", function () {
  describe("isFormValid()", function () {
    it("should be false", function () {
      const objToValidate = fromJS({
        isValid: false,
        name: {
          required: true
        },
        password: {
          required: false,
          confirmed: false
        }
      });
      expect(isFormValid(objToValidate)).to.eq(false);
    });

    it("should be true", function () {
      const objToValidate = fromJS({
        isValid: false,
        name: {
          required: false
        },
        password: {
          required: false,
          confirmed: false
        }
      });
      expect(isFormValid(objToValidate)).to.eq(true);
    });
  });
})
;

