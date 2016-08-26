import {expect} from 'chai'
const mongoose = require('mongoose');
const sinon = require('sinon');
const when = require('when');

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actionsTypes from './userActionTypes';
import actions from './usersActions';
const userService = require('./../services/userService');

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('userSchema Actions', function () {
  describe("should create action:", function () {
    afterEach(function () {
      mongoose.modelSchemas = {};
      mongoose.models = {};
    });


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

    it("get user request", sinon.test(function () {
      this.stub(userService, 'findById').returns(when({hhh: "2"}));

      const expectedActions = [
        {
          type: actionsTypes.GET_USER_REQUEST_SUCCESS,
          body: {hhh: "2"}
        }
      ];

      const store = mockStore({});

      return store.dispatch(actions.getUserRequest("51bb793aca2ab77a3200000d")).then(function () {
        expect(store.getActions()).to.eql(expectedActions)
      });
    }));

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
