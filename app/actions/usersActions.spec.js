import {expect} from 'chai'
import * as actions from './userActionTypes';
import {addUserRequest} from './usersActions';


describe('User Actions Creator', function () {
  it('should create an action to add a new user', () => {
    const user = {
      name: 'xxx',
      email: 'a123@wp.pl'
    };
    const expectedAction = {
      type: actions.ADD_USER_REQUEST,
      user
    };
    expect(addUserRequest(user)).to.eql(expectedAction);
  })
});
