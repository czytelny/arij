const {expect} = require('chai');
const {Map, fromJS} = require('immutable');

const userReducer = require('./userReducer');
const act = require('./../usersActionTypes');


describe("userReducer", function () {
  it("has initial state", function () {
    const action = {type: "ANY"};
    const nextState = userReducer(undefined, action);
    expect(nextState.get("user")).to.not.be.undefined;
  });

  it("handles USER_NAME_CHANGED", function () {
    const initialState = Map();
    const action = {type: act.USER_NAME_CHANGED, name: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "name"])).to.eq("ddd");
  });

  it("USER_NAME_CHANGED validation-require pass", function () {
    const initialState = Map();
    const action = {type: act.USER_NAME_CHANGED, name: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "name", "required"])).to.eq(false);
  });

  it("USER_NAME_CHANGED validation-require error", function () {
    const initialState = Map();
    const action = {type: act.USER_NAME_CHANGED, name: ""};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "name", "required"])).to.eq(true);
  });

  it("handles USER_EMAIL_CHANGED", function () {
    const initialState = Map();
    const action = {type: act.USER_EMAIL_CHANGED, email: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "email"])).to.eq("ddd");
  });

  it("USER_EMAIL_CHANGED validation-require pass", function () {
    const initialState = Map();
    const action = {type: act.USER_EMAIL_CHANGED, email: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "required"])).to.eq(false);
  });

  it("USER_EMAIL_CHANGED validation-require error", function () {
    const initialState = Map();
    const action = {type: act.USER_EMAIL_CHANGED, email: ""};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "required"])).to.eq(true);
  });

  it("USER_EMAIL_CHANGED validation-format pass", function () {
    const initialState = Map();
    const action = {type: act.USER_EMAIL_CHANGED, email: "ddd@wp.pl"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "format"])).to.eq(false);
  });

  it("USER_EMAIL_CHANGED validation-format error", function () {
    const initialState = Map();
    const action = {type: act.USER_EMAIL_CHANGED, email: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "email", "format"])).to.eq(true);
  });

  it("handles USER_PASSWORD_CHANGED", function () {
    const initialState = Map({
      passwordConfirm: "ddd"
    });
    const action = {type: act.USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["user", "password"])).to.eq("ddd");
  });

  it("handles USER_PASSWORD_CHANGED validation-confirmation pass", function () {
    const initialState = Map({
      passwordConfirm: "ddd"
    });
    const action = {type: act.USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(false);
  });


  it("handles USER_PASSWORD_CHANGED validation-confirmation error", function () {
    const initialState = Map({
      passwordConfirm: "ddd"
    });
    const action = {type: act.USER_PASSWORD_CHANGED, password: "aaa"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(true);
  });

  it("handles USER_PASSWORD_CHANGED validation-require pass", function () {
    const initialState = Map({});
    const action = {type: act.USER_PASSWORD_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "required"])).to.eq(false);
  });
  it("handles USER_PASSWORD_CHANGED validation-require error", function () {
    const initialState = Map({});
    const action = {type: act.USER_PASSWORD_CHANGED, password: ""};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "required"])).to.eq(true);
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED", function () {
    const initialState = Map({
      user: Map({password: "ddd"})
    });
    const action = {type: act.USER_PASSWORD_CONFIRM_CHANGED, password: "ddd"};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("passwordConfirm")).to.eq("ddd");
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED validation-confirmation pass", function () {
    const initialState = Map({
      user: Map({password: "aaa"})
    });
    const action = {type: act.USER_PASSWORD_CONFIRM_CHANGED, password: "aaa"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(false);
  });

  it("handles USER_PASSWORD_CONFIRM_CHANGED validation-confirmation error", function () {
    const initialState = Map({
      user: Map({password: "aaa"})
    });
    const action = {type: act.USER_PASSWORD_CONFIRM_CHANGED, password: "zzz"};
    const nextState = userReducer(initialState, action);
    expect(nextState.getIn(["errors", "password", "confirmed"])).to.eq(true);
  });

  it("handles SAVING_USER_IN_PROGRESS", function () {
    const initialState = Map({});
    const action = {type: act.ADD_USER_REQUEST};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("savingInProgress")).to.eq(true);
  });

  it("handles ADD_USER_REQUEST_SUCCESS", function () {
    const initialState = Map({});
    const action = {type: act.ADD_USER_REQUEST_SUCCESS};
    const nextState = userReducer(initialState, action);
    expect(nextState.get("savingInProgress")).to.eq(false);
  });

  it("handles VALIDATE_USER", function () {
    const initialState = fromJS({
      user: {
        name: null,
        email: null,
        password: null
      }
    });
    const action = {type: act.VALIDATE_USER};
    const nextState = userReducer(initialState, action);

    expect(nextState.getIn(["errors", "isValid"])).to.eq(false);
  });

  it("handles VALIDATE_USER_EDIT true", function () {
    const initialState = fromJS({
      user: {
        name: "name"
      }
    });
    const action = {type: act.VALIDATE_USER_EDIT};
    const nextState = userReducer(initialState, action);

    expect(nextState.getIn(["errors", "isValid"])).to.eq(true);
  });

  it("handles VALIDATE_USER_EDIT false", function () {
    const initialState = fromJS({
      user: {name: ""}
    });
    const action = {type: act.VALIDATE_USER_EDIT};
    const nextState = userReducer(initialState, action);

    expect(nextState.getIn(["errors", "isValid"])).to.eq(false);
  });

  it("handles GET_USER_REQUEST_SUCCESS", function () {
    const initialState = Map({});
    const action = {
      type: act.GET_USER_REQUEST_SUCCESS,
      user: {name: "czesiek"}
    };
    const nextState = userReducer(initialState, action);

    expect(nextState.get("user"))
      .to.eq(fromJS({name: "czesiek"}));
  });


});
