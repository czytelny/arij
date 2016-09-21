import React from 'react';

const UserEmailInput = ({emailChangeHandler, errors}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="userEmail">Email</label>
      <div className="input-group">
        <div className="input-group-addon">
          <span className="b"><strong>@</strong></span>
        </div>
        <input onBlur={emailChangeHandler} type="text" className="form-control" id="userEmail" placeholder="Email"/>

        {errors.get("required") || errors.get("format") ?
          <div className="has-error">
            <span className="glyphicon glyphicon-remove form-control-feedback"/>
          </div>
          : null}
      </div>
    </div>
  </div>;

export default UserEmailInput;

