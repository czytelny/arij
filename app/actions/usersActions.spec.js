import mongoose from 'mongoose';
import sinon from 'sinon';
import when from 'when';
import {expect} from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

mongoose.models = {};
mongoose.modelSchemas = {};
mongoose.connection.close();

import * as actionsTypes from './userActionTypes';
import actions from './usersActions';
import userService from './../services/userService';

describe('User Actions', function () {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

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
      expect(actions.addUserRequestSuccess(body)).to.contain({
        type: actionsTypes.ADD_USER_REQUEST_SUCCESS,
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

    it("get user request success", sinon.test(function () {
      let objFromDB = {id: "2"};
      const store = mockStore({});
      const expectedActions = [actions.getUserRequestSuccess(objFromDB)];
      this.stub(userService, 'findById').returns(when.resolve(objFromDB));

      return store
        .dispatch(actions.getUserRequest("51bb793aca2ab77a3200000d"))
        .then(() => expect(store.getActions()).to.eql(expectedActions));
    }));

    it("get user request failure", sinon.test(function () {
      let errObj = {err: "500"};
      const store = mockStore({});
      const expectedActions = [actions.getUserRequestFailure(errObj)];
      this.stub(userService, 'findById').returns(when.reject(errObj));

      return store
        .dispatch(actions.getUserRequest("51bb793aca2ab77a3200000d"))
        .then(() => expect(store.getActions()).to.eql(expectedActions));
    }));

    it("get user request success", function () {
      const body = {id: 3};
      expect(actions.getUserRequestSuccess(body))
        .to.eql({
        type: actionsTypes.GET_USER_REQUEST_SUCCESS,
        body
      })
    });

    it("get user request failure", function () {
      const err = {msg:'500'};
      expect(actions.getUserRequestFailure(err))
        .to.eql({
        type: actionsTypes.GET_USER_REQUEST_FAILURE,
        err
      })
    });
  });
});
