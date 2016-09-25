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
    <div className="col-sm-10 mainView">
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
