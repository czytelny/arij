import React from 'react';

import UserNameInput from './userNameInput'
import ActionButtons from './userEditActionButtons'


const userEdit = ({
  nameChangeHandler, submitEditHandler,
  errors, savingInProgress, user
}) =>
  <div className="row">
    <div className="col-sm-6">
      <form name="addNewUserForm" onSubmit={submitEditHandler}>
        <div className="row">
          <div className="col-sm-12">
            <h1>Editing user</h1>
          </div>
        </div>
        <div className="form-group">
          <UserNameInput nameValue={user.get("name") || ""}
                         nameChangeHandler={nameChangeHandler}
                         errors={errors.get("name")}/>

          <h5>Email: {user.get("email")}</h5>
          <h5>Password: *** <p className="btn btn-default btn-xs">reset</p></h5>
        </div>
        <div className="form-group">
          <ActionButtons savingInProgress={savingInProgress}/>
        </div>
      </form>
    </div>
  </div>;

export default userEdit;
