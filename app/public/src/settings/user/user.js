import React from 'react';

import UserNameInput from './userNameInput'
import UserEmailInput from './userEmailInput'
import UserPasswordInput from './userPasswordInput'
import ActionButtons from './actionButtons'


const user = ({
  nameChangeHandler, emailChangeHandler,
  passwordChangeHandler, passwordConfirmChangeHandler,
  submitHandler, errors
}) =>
  <div className="row">
    <div className="col-sm-6">
      <form name="addNewUserForm" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-sm-12">
            <h1>Add new user</h1>
          </div>
        </div>
        <div className="form-group">
          <UserNameInput nameChangeHandler={nameChangeHandler} errors={errors.get("name")}/>
          <UserEmailInput emailChangeHandler={emailChangeHandler} errors={errors.get("email")}/>
          <UserPasswordInput errors={errors.get("password")}
                             passwordChangeHandler={passwordChangeHandler}
                             passwordConfirmChangeHandler={passwordConfirmChangeHandler}/>
        </div>
        <div className="form-group">
          <ActionButtons errors={errors}/>
        </div>
      </form>
    </div>
  </div>;

export default user;
