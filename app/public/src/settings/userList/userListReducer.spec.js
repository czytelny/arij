import {expect} from 'chai';
import {Map, fromJS, List} from 'immutable';
import userListReducer from './userListReducer';
import {
  GET_ALL_USER_REQUEST_SUCCESS
} from '../../../../shared/userActionTypes'


describe("userListReducer", function () {
  it("has initial state", function () {
    const action = {type: "RANDOM"};
    const nextState = userListReducer(undefined, action);
    expect(nextState.get("users")).to.equal(List());
  });

  it("handles GET_ALL_USER_REQUEST_SUCCESS", function () {
    const initialState = Map();
    const action = {
      type: GET_ALL_USER_REQUEST_SUCCESS,
      users: List.of("user1", "uesr2")
    };
    const nextState = userListReducer(initialState, action);
    expect(nextState).to.equal(fromJS({
      users: List.of("user1", "uesr2")
    }))

  });
});
