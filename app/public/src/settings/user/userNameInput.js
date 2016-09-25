import React from 'react';

const UserNameInput = ({nameChangeHandler, errors, nameValue}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="userName">User name</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-child" aria-hidden="true"/>
        </div>
        <input onBlur={nameChangeHandler}
               value={nameValue}
               id="userName"
               type="text"
               className="form-control"
               placeholder="User name"/>

        {errors.get("required") ?
          <div className="has-error">
            <span className="glyphicon glyphicon-remove form-control-feedback"/>
          </div>
          : null}
      </div>
    </div>
  </div>;

export default UserNameInput;

