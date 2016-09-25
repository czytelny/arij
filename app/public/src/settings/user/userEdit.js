import React from 'react';

import UserNameInput from './userNameInput'
import UserEmailInput from './userEmailInput'
import UserPasswordInput from './userPasswordInput'
import ActionButtons from './userActionButtons'


const userEdit = ({
  nameChangeHandler, submitHandler,
  errors, savingInProgress, user
}) =>
  <div className="row">
    <div className="col-sm-6">
      <form name="addNewUserForm" onSubmit={submitHandler}>
        <div className="row">
          <div className="col-sm-12">
            <h1>Editing user</h1>
          </div>
        </div>
        <div className="form-group">
          {/*<UserNameInput nameValue={user.get("name")}*/}
                         {/*nameChangeHandler={nameChangeHandler}*/}
                         {/*errors={errors.get("name")}/>*/}
          {/*<UserEmailInput emailValue={user.get("email")}/>*/}
          {/*<UserPasswordInput />*/}
        </div>
        <div className="form-group">
          <ActionButtons savingInProgress={savingInProgress}/>
        </div>
      </form>
    </div>
  </div>;

export default userEdit;
