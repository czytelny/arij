import React from 'react';

const UserPasswordInput = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <label htmlFor="userPassword">Password</label>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="b"><strong>*</strong></span>
            </div>
            <input type="password" className="form-control" id="userPassword" placeholder="Password"/>
          </div>
        </div>
        <div className="col-sm-4">
          <label htmlFor="userPasswordConfirm">Confirm password</label>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="b"><strong>*</strong></span>
            </div>
            <input type="password" className="form-control" id="userPasswordConfirm" placeholder="Password"/>
          </div>
        </div>

      </div>

    )
  }
});

export default UserPasswordInput;

