import React from 'react';

const UserEmailInput = ({emailChangeHandler, errors}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="userEmail">Email</label>
      <div className={"input-group " + (errors.get("required") || errors.get("format")
        ? "has-error" : "")}>
        <div className="input-group-addon">
          <span className="b"><strong>@</strong></span>
        </div>
        <input onBlur={emailChangeHandler} type="text" className="form-control" id="userEmail" placeholder="Email"/>
      </div>
    </div>
  </div>;

export default UserEmailInput;

