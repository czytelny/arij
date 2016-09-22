import React from 'react';

const UserPasswordInput = ({passwordChangeHandler, passwordConfirmChangeHandler, errors}) =>
  <div className="row">
    <div className="col-sm-4">
      <label htmlFor="userPassword">Password</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-asterisk" aria-hidden="true"/>
        </div>
        <input onChange={passwordChangeHandler} type="password" className="form-control" id="userPassword"/>
      </div>
    </div>
    <div className="col-sm-4">
      <label htmlFor="userPasswordConfirm">Confirm password</label>
      <div className="form-group has-feedback">
        <input onChange={passwordConfirmChangeHandler} type="password" className="form-control"
               id="userPasswordConfirm"/>
        { errors.get("required") || errors.get("confirmed")
          ?
          <div className="has-error">
            <span className="glyphicon glyphicon-remove form-control-feedback"/>
          </div>
          :
          null
        }

      </div>
    </div>

  </div>;

export default UserPasswordInput;

