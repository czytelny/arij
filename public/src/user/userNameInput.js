import React from 'react';

const UserNameInput = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <label htmlFor="userName">User name</label>
          <div className="input-group">
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-user" aria-hidden="true"> </span>
            </div>
            <input type="text" className="form-control" id="userName" placeholder="User name"/>
          </div>
        </div>
      </div>
    )
  }
});

export default UserNameInput;

