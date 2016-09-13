import React from 'react';

import Header from '../../app/header'
import UserListContainer from './userListContainer'
import SettingsMenu from '../settingsMenu'
import {Link} from 'react-router'

const UserListView = () => <div>
  <div className="row">
    <Header/>
  </div>
  <div className="row content">
    <div className="col-sm-2">
      <SettingsMenu/>
    </div>
    <div className="col-sm-9">
      <div className="col-sm-12">
        <h1>
          Users <Link to="/settings/user/new" className="badge">New user</Link>
        </h1>
        <UserListContainer/>
        <Link to="/settings" className="btn btn-default">Back</Link>
      </div>
    </div>
  </div>
</div>;


export default UserListView;
