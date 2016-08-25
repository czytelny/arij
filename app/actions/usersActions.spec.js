import {expect} from 'chai'
import * as actionsTypes from './userActionTypes';
import * as actions from './usersActions';


describe('User Actions Creator', function () {
  describe("should create user action", function () {
    it('new user', function () {
      const user = {
        name: 'xxx',
        email: 'a123@wp.pl'
      };
      const expectedAction = {
        type: actionsTypes.ADD_USER_REQUEST,
        user
      };
      expect(actions.addUserRequest(user)).to.eql(expectedAction);
    });

    it('user successfully created', function () {
      const expectedAction = {
        type: actionsTypes.ADD_USER_REQUEST_SUCCESS
      };
      expect(actions.addUserRequestSuccess()).to.eql(expectedAction);
    });

    it('user creation failed', function () {
      const errorCode = 500;
      const errorMessage = "internal server error";
      const expectedAction = {
        type: actionsTypes.ADD_USER_REQUEST_FAILURE,
        code: errorCode,
        msg: errorMessage
      };
      expect(actions.addUserRequestFailure(errorCode, errorMessage)).to.eql(expectedAction);
    });
  });
});
