import React from 'react';

import UserNameInput from './userNameInput'
import UserEmailInput from './userEmailInput'
import UserPasswordInput from './userPasswordInput'
import ActionButtons from './actionButtons'

const user = () =>
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
        <div>
          <ActionButtons/>
        </div>
      </form>
    </div>
  </div>;

export default user;
