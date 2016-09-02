import React from 'react';

import UserNameInput from './userNameInput'
import UserEmailInput from './userEmailInput'
import UserPasswordInput from './userPasswordInput'

const user = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
        <form name="addNewUserForm">
          <div className="row">
            <div className="col-sm-12">
              <legend>Add new user</legend>
            </div>
          </div>
          <div className="form-group">
            <UserNameInput/>
            <UserEmailInput/>
            <UserPasswordInput/>
          </div>
          <div className="form-group">
            <button type="submit" name="submit" value="Submit" className="btn btn-primary">Submit</button>
            <button type="button" name="cancel" value="cancel" className="btn btn-link pull-right">Cancel</button>
          </div>
        </form>
          </div>
      </div>
    )
  }
});

export default user;
