import React from 'react';

import UserNameInput from './userNameInput'
import UserEmailInput from './userEmailInput'
import UserPasswordInput from './userPasswordInput'
import ActionButtons from './actionButtons'


const user = ({
  nameChangeHandler, emailChangeHandler,
  passwordChangeHandler, passwordConfirmChangeHandler,
  submitHandler, isValid, errors
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
          <UserEmailInput emailChangeHandler={emailChangeHandler}/>
          <UserPasswordInput isValid={isValid}
                             passwordChangeHandler={passwordChangeHandler}
                             passwordConfirmChangeHandler={passwordConfirmChangeHandler}/>
        </div>
        <div className="form-group">
          <ActionButtons isValid={isValid}/>
        </div>
      </form>
    </div>
  </div>;

export default user;
