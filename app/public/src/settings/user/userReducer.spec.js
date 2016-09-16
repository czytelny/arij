import {expect} from 'chai';
import {Map} from 'immutable';

import userReducer from './userReducer'
import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED
} from '../../../../shared/userActionTypes'


describe("userReducer", function () {
  it("has initial state", function () {
    const action = {type: "ANY"};
    const nextState = userReducer(undefined, action);
    expect(nextState.get("user")).to.not.be.undefined;
    expect(nextState.get("isValid")).to.not.be.undefined;
  });

  it("handles USER_NAME_CHANGED", function () {
    const initialState = Map();
    const action = {type: USER_NAME_CHANGED, name: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "name"])).to.eq("ddd");
  });

  it("handles USER_EMAIL_CHANGED", function () {
    const initialState = Map();
    const action = {type: USER_EMAIL_CHANGED, email: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "email"])).to.eq("ddd");
  });

  it("handles USER_PASSWORD_CHANGED and is in sync with confirmation", function () {
    const initialState = Map({
      passwordConfirm: "ddd"
    });
    const action = {type: USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "password"])).to.eq("ddd");
    expect(nextState.get("isValid")).to.eq(true);
  });

  it("handles USER_PASSWORD_CHANGED and is not in sync with confirmation", function () {
    const initialState = Map({
      passwordConfirm: "aaa"
    });
    const action = {type: USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "password"])).to.eq("ddd");
    expect(nextState.get("isValid")).to.eq(false);
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED and is in sync with password", function () {
    const initialState = Map({
      user: Map({password:"ddd"})
    });
    const action = {type: USER_PASSWORD_CONFIRM_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("passwordConfirm")).to.eq("ddd");
    expect(nextState.get("isValid")).to.eq(true);
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED and is not in sync with password", function () {
    const initialState = Map({
      user: Map({password:"aaa"})
    });
    const action = {type: USER_PASSWORD_CONFIRM_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("passwordConfirm")).to.eq("ddd");
    expect(nextState.get("isValid")).to.eq(false);
  });

});
