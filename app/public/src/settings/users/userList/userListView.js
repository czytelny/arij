import React from 'react';

import Navbar from './../../../app/navbar/navbar'
import UserListContainer from './userListContainer'
import {Link} from 'react-router'
import SettingsMenu from './../../settingsSidenav'


const UserListView = () => <div>
  <div className="row">
    <div className="col-sm-2">
      <SettingsMenu/>
    </div>

    <div className="col-sm-10 mainView">
      <Navbar/>
      <div className="col-sm-12">
        <h1>
          Users <Link to="/settings/user" className="badge">New user</Link>
        </h1>
        <UserListContainer/>
      </div>
    </div>
  </div>
</div>;


export default UserListView;
