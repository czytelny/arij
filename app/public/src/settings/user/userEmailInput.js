import React from 'react';

const UserEmailInput = ({emailChangeHandler, errors, emailValue}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="userEmail">Email</label>
      <div className="input-group">
        <div className="input-group-addon">
          <span className="b"><strong>@</strong></span>
        </div>
        <input type="text"
               id="userEmail"
               value={emailValue}
               onChange={emailChangeHandler}
               className="form-control"
               placeholder="Email"/>

        {
         errors.get("required") || errors.get("format") ?
          <div className="has-error">
            <span className="glyphicon glyphicon-remove form-control-feedback"/>
          </div>
          : null
        }
      </div>
    </div>
  </div>;

export default UserEmailInput;

