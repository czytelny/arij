import React from 'react';

const UserPasswordInput = ({passwordChangeHandler}) =>
    <div className="row">
      <div className="col-sm-4">
        <label htmlFor="userPassword">Password</label>
        <div className="input-group">
          <div className="input-group-addon">
            <i className="fa fa-asterisk" aria-hidden="true"/>
          </div>
          <input onChange={passwordChangeHandler} type="password"  className="form-control" id="userPassword" placeholder="Password"/>
        </div>
      </div>
      <div className="col-sm-4">
        <label htmlFor="userPasswordConfirm">Confirm password</label>
        <div className="input-group">
          <div className="input-group-addon">
            <i className="fa fa-asterisk" aria-hidden="true"/>
          </div>
          <input type="password" className="form-control" id="userPasswordConfirm" placeholder="Confirm password"/>
        </div>
      </div>

    </div>;

export default UserPasswordInput;

