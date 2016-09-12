import React from 'react';

import UserNameInput from './userNameInput'
import UserEmailInput from './userEmailInput'
import UserPasswordInput from './userPasswordInput'
import ActionButtons from './actionButtons'

const user = ({nameChangeHandler, emailChangeHandler, passwordChangeHandler, submitHandler}) =>
  <div className="row">
    <div className="col-sm-6">
      <form name="addNewUserForm" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-sm-12">
            <h1>Add new user</h1>
          </div>
        </div>
        <div className="form-group">
          <UserNameInput nameChangeHandler={nameChangeHandler}/>
          <UserEmailInput emailChangeHandler={emailChangeHandler}/>
          <UserPasswordInput passwordChangeHandler={passwordChangeHandler}/>
        </div>
        <div>
          <ActionButtons/>
        </div>
      </form>
    </div>
  </div>;

export default user;
