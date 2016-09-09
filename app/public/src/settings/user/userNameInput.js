import React from 'react';

const UserNameInput = ({nameChangeHandler}) =>
  <div className="row">
    <div className="col-sm-8">
      <label htmlFor="userName">User name</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-child" aria-hidden="true"/>
        </div>
        <input onChange={nameChangeHandler} type="text" className="form-control" id="userName" placeholder="User name"/>
      </div>
    </div>
  </div>;

export default UserNameInput;

