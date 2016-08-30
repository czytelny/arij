import {expect} from 'chai';
import usersReducer from './usersReducer';
import usersAction from './../actions/usersActions';
import {Map, List, fromJS} from 'immutable';


describe("usersReducer", function () {
  it("should return initial state", function () {
    const initialState = Map({
      entries: List()
    });
    expect(usersReducer(undefined, {})).to.equal(initialState);
  });

  describe("handles", function () {
    it("Add user request success", function () {
      const user1 = {id: 1, name: 'aaa', email: "aaa@wp.pl", password: "123"};
      const user2 = {id: 2, name: 'bbb', email: "bbb@wp.pl", password: "321"};
      const initialState = fromJS({
        entries: [user1, user2]
      });
      const user3 = {id: 3, name: 'cc', email: "ccc@wp.pl", password: "321"};
      expect(usersReducer(initialState, usersAction.addUserRequestSuccess(user3)))
        .to.equal(fromJS({entries: [user1, user2, user3]}));
    });
  });
});
