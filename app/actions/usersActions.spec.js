import {expect} from 'chai'
import * as actionsTypes from './userActionTypes';
import * as actions from './usersActions';


describe('userSchema Actions', function () {
  describe("should create action:", function () {
    it('add user request', function () {
      const user = {
        name: 'xxx',
        email: 'a123@wp.pl'
      };
      expect(actions.addUserRequest(user)).to.eql({
        type: actionsTypes.ADD_USER_REQUEST,
        user
      });
    });

    it('add user request success', function () {
      var body = {};
      expect(actions.addUserRequestSuccess(body)).to.eql({
        type: actionsTypes.ADD_USER_REQUEST_SUCCESS,
        receivedAt: Date.now(),
        body
      });
    });

    it('add user request failed', function () {
      const errorCode = 500;
      const errorMessage = "internal server error";

      expect(actions.addUserRequestFailure(errorCode, errorMessage))
        .to.eql({
        type: actionsTypes.ADD_USER_REQUEST_FAILURE,
        code: errorCode,
        msg: errorMessage
      });
    });

    it("get user request dupa", function () {
      const userId = 32;
       // expect(actions.getUserRequest(userId)).exist;
    });

    it("get user request success", function () {
      const body = {id: 3};
      expect(actions.getUserRequestSuccess(body))
        .to.eql({
        type: actionsTypes.GET_USER_REQUEST_SUCCESS,
        body
      })
    });
  });
});
