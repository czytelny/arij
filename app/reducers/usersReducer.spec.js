import {expect} from 'chai';
import usersReducer from './usersReducer';
import usersAction from '../actions/usersActions';


describe("usersReducer", function () {
  it("should return initial state", function () {
    const initialState = {
      selectedEntry: null,
      entries: new Map()
    };
    expect(usersReducer(undefined, {})).to.eql(initialState);
  });

  describe("handles", function () {
    it("Add user request success", function () {
      const user1 = {_id: 453, name: 'aaa'};
      const initialState = {
        entries: new Map().set(user1.id, user1)
      };
      const user3 = {_id: 3, name: 'cc'};

      expect(usersReducer(initialState, usersAction.addUserRequestSuccess(user3)))
        .to.eql({
        entries: new Map().set(user1._id, user1).set(user3._id, user3)
      });
    });

    it("Get user request success", function () {
      const user1 = {_id: 453, name: 'aaa'};
      const initialState = {
        selectedEntry: null,
        entries: new Map().set(user1.id, user1)
      };

      const expectedState = {
        selectedEntry: user1._id,
        entries: new Map().set(user1.id, user1)
      };

      expect(usersReducer(initialState, usersAction.getUserRequestSuccess(user1)))
        .to.eql(expectedState)

    });
  });
});
