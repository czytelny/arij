const {expect} = require('chai');
const {Map, fromJS} = require('immutable');
const messagesReducer = require('./messagesReducer');
const {
  SHOW_ERROR_MESSAGE,
  HIDE_MESSAGE,
  SHOW_SUCCESS_MESSAGE
} = require('./messagesActionTypes');

describe("messagesReducer", function() {
  it("has initial state", function() {
    const action = {type: "ANY"};
    const nextState = messagesReducer(undefined, action);
    expect(nextState.get("isVisible")).to.equal(false);
    expect(nextState.get("errorMessage")).to.equal(null);
    expect(nextState.get("successMessage")).to.equal(null);
  });

  it("handles SHOW_ERROR_MESSAGE with message", function() {
    const initState = Map();
    const action = {type: SHOW_ERROR_MESSAGE, message: "ddd"};
    const nextState = messagesReducer(initState, action);
    expect(nextState).to.equal(fromJS({
      isVisible: true,
      errorMessage: "ddd"
    }))
  });

  it("handles SHOW_ERROR_MESSAGE without message", function() {
    const initState = Map({
      defaultErrorMessage: "defaultErrorMessage"
    });
    const action = {type: SHOW_ERROR_MESSAGE};
    const nextState = messagesReducer(initState, action);
    expect(nextState).to.equal(fromJS({
      isVisible: true,
      errorMessage: "defaultErrorMessage",
      defaultErrorMessage: "defaultErrorMessage"
    }))
  });

  it("should handle SHOW_SUCCESS_MESSAGE", function() {
    const initState = Map();
    const action = {type: SHOW_SUCCESS_MESSAGE, message: "ddd"};
    const nextState = messagesReducer(initState, action);
    expect(nextState).to.equal(fromJS({
      isVisible: true,
      successMessage: "ddd"
    }))
  });

  it("should handle HIDE_MESSAGE", function() {
    const initState = Map();
    const action = {type: HIDE_MESSAGE, message: "ddd"};
    const nextState = messagesReducer(initState, action);
    expect(nextState).to.equal(fromJS({
      isVisible: false,
      successMessage: null,
      errorMessage: null
    }))
  });

});
