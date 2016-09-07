import React from 'react';

const UserEmailInput = ({handleEmailChange}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="userEmail">Email</label>
      <div className="input-group">
        <div className="input-group-addon">
          <span className="b"><strong>@</strong></span>
        </div>
        <input onChange={handleEmailChange} type="text" className="form-control" id="userEmail" placeholder="Email"/>
      </div>
    </div>
  </div>;

export default UserEmailInput;

