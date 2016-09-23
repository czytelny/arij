import {expect} from 'chai';
import {Map} from 'immutable';

import userReducer from './userReducer'
import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CONFIRM_CHANGED,
  SAVING_USER_IN_PROGRESS,
  SAVING_USER_FINISHED
} from '../../../../shared/userActionTypes'


describe("userReducer", function () {
  it("has initial state", function () {
    const action = {type: "ANY"};
    const nextState = userReducer(undefined, action);
    expect(nextState.get("user")).to.not.be.undefined;
  });

  it("handles USER_NAME_CHANGED", function () {
    const initialState = Map();
    const action = {type: USER_NAME_CHANGED, name: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "name"])).to.eq("ddd");
  });

  it("USER_NAME_CHANGED validation-require pass", function () {
    const initialState = Map();
    const action = {type: USER_NAME_CHANGED, name: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "name", "required"])).to.eq(false);
  });

  it("USER_NAME_CHANGED validation-require error", function () {
    const initialState = Map();
    const action = {type: USER_NAME_CHANGED, name: ""};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "name", "required"])).to.eq(true);
  });

  it("handles USER_EMAIL_CHANGED", function () {
    const initialState = Map();
    const action = {type: USER_EMAIL_CHANGED, email: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "email"])).to.eq("ddd");
  });

  it("USER_EMAIL_CHANGED validation-require pass", function () {
    const initialState = Map();
    const action = {type: USER_EMAIL_CHANGED, email: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "required"])).to.eq(false);
  });

  it("USER_EMAIL_CHANGED validation-require error", function () {
    const initialState = Map();
    const action = {type: USER_EMAIL_CHANGED, email: ""};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "required"])).to.eq(true);
  });

  it("USER_EMAIL_CHANGED validation-format pass", function () {
    const initialState = Map();
    const action = {type: USER_EMAIL_CHANGED, email: "ddd@wp.pl"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "format"])).to.eq(false);
  });

  it("USER_EMAIL_CHANGED validation-format error", function () {
    const initialState = Map();
    const action = {type: USER_EMAIL_CHANGED, email: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "format"])).to.eq(true);
  });

  it("handles USER_PASSWORD_CHANGED", function () {
    const initialState = Map({
      passwordConfirm: "ddd"
    });
    const action = {type: USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "password"])).to.eq("ddd");
  });

  it("handles USER_PASSWORD_CHANGED validation-confirmation pass", function () {
    const initialState = Map({
      passwordConfirm: "ddd"
    });
    const action = {type: USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(false);
  });


  it("handles USER_PASSWORD_CHANGED validation-confirmation error", function () {
    const initialState = Map({
      passwordConfirm: "ddd"
    });
    const action = {type: USER_PASSWORD_CHANGED, password: "aaa"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(true);
  });

  it("handles USER_PASSWORD_CHANGED validation-require pass", function () {
    const initialState = Map({});
    const action = {type: USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "required"])).to.eq(false);
  });
  it("handles USER_PASSWORD_CHANGED validation-require error", function () {
    const initialState = Map({});
    const action = {type: USER_PASSWORD_CHANGED, password: ""};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "required"])).to.eq(true);
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED", function () {
    const initialState = Map({
      user: Map({password:"ddd"})
    });
    const action = {type: USER_PASSWORD_CONFIRM_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("passwordConfirm")).to.eq("ddd");
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED validation-confirmation pass", function () {
    const initialState = Map({
      user: Map({password:"aaa"})
    });
    const action = {type: USER_PASSWORD_CONFIRM_CHANGED, password: "aaa"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(false);
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED validation-confirmation error", function () {
    const initialState = Map({
      user: Map({password:"aaa"})
    });
    const action = {type: USER_PASSWORD_CONFIRM_CHANGED, password: "zzz"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(true);
  });

  it("handles SAVING_USER_IN_PROGRESS", function () {
    const initialState = Map({});
    const action = {type: SAVING_USER_IN_PROGRESS};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("savingInProgress")).to.eq(true);
  });

  it("handles SAVING_USER_FINISHED", function () {
    const initialState = Map({});
    const action = {type: SAVING_USER_FINISHED};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("savingInProgress")).to.eq(false);
  });

});
