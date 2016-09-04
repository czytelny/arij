import mongoose from 'mongoose';
import sinon from 'sinon';
import when from 'when';
import {expect} from 'chai'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

mongoose.models = {};
mongoose.modelSchemas = {};
mongoose.connection.close();

import * as actionsTypes from '../shared/userActionTypes';
import actions from './usersActions';
import userService from './../services/userService';

describe('User Actions', function () {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  describe("should create action", function () {
    describe("add user", function () {
      it("request", function () {
        let user = {};
        expect(actions.addUserRequest(user)).to.be.a('Function');
      });

      it('request success', sinon.test(function () {
        let userToAdd = {name: "aaa"};
        let addedUser = {id: 111, name: "aaa"};
        const store = mockStore({});
        const expectedAction = actions.addUserRequestSuccess(addedUser);
        this.stub(userService, 'save').returns(when.resolve(addedUser));

        return store
          .dispatch(actions.addUserRequest(userToAdd))
          .then(() => expect(store.getActions()[0].type).to.eql(expectedAction.type));
      }));

      it('request failure', sinon.test(function () {
        let userToAdd = {name: "aaa"};
        let addedUser = {id: 111, name: "aaa"};
        const store = mockStore({});
        const expectedAction = actions.addUserRequestFailure(addedUser);
        this.stub(userService, 'save').returns(when.reject(addedUser));

        return store
          .dispatch(actions.addUserRequest(userToAdd))
          .then(() => expect(store.getActions()[0].type).to.eql(expectedAction.type));
      }));

      it('success', function () {
        var body = {};
        expect(actions.addUserRequestSuccess(body)).to.contain({
          type: actionsTypes.ADD_USER_REQUEST_SUCCESS,
          body
        });
      });

      it('failure', function () {
        let err = 500;

        expect(actions.addUserRequestFailure(err))
          .to.eql({
          type: actionsTypes.ADD_USER_REQUEST_FAILURE,
          err
        });
      });
    });

    describe("get user", function () {
      it("request", function () {
        let userId = '3';
        expect(actions.getUserRequest(userId)).to.be.a('Function');
      });

      it("request success", sinon.test(function () {
        let objFromDB = {id: "2"};
        const store = mockStore({});
        const expectedActions = [actions.getUserRequestSuccess(objFromDB)];
        this.stub(userService, 'findById').returns(when.resolve(objFromDB));

        return store
          .dispatch(actions.getUserRequest("51bb793aca2ab77a3200000d"))
          .then(() => expect(store.getActions()).to.eql(expectedActions));
      }));

      it("request failure", sinon.test(function () {
        let errObj = {err: "500"};
        const store = mockStore({});
        const expectedActions = [actions.getUserRequestFailure(errObj)];
        this.stub(userService, 'findById').returns(when.reject(errObj));

        return store
          .dispatch(actions.getUserRequest("51bb793aca2ab77a3200000d"))
          .then(() => expect(store.getActions()).to.eql(expectedActions));
      }));

      it("success", function () {
        const body = {id: 3};
        expect(actions.getUserRequestSuccess(body))
          .to.eql({
          type: actionsTypes.GET_USER_REQUEST_SUCCESS,
          body
        })
      });

      it("failure", function () {
        const err = {msg:'500'};
        expect(actions.getUserRequestFailure(err))
          .to.eql({
          type: actionsTypes.GET_USER_REQUEST_FAILURE,
          err
        })
      });
    });
  });
});
