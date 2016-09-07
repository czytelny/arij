import React from 'react';

import UserNameInput from './userNameInput'
import UserEmailInput from './userEmailInput'
import UserPasswordInput from './userPasswordInput'
import ActionButtons from './actionButtons'

const user = ({passwordChangeHandler, nameChangeHandler, emailChangeHandler, submitHandler}) =>
  <div className="row">
    <div className="col-sm-6">
      <form name="addNewUserForm" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-sm-12">
            <legend>Add new user</legend>
          </div>
        </div>
        <div className="form-group">
          <UserNameInput handleNameChange={nameChangeHandler}/>
          <UserEmailInput handleEmailChange={emailChangeHandler}/>
          <UserPasswordInput handlePasswordChange={passwordChangeHandler}/>
        </div>
        <div>
          <ActionButtons/>
        </div>
      </form>
    </div>
  </div>;

export default user;
