import React from 'react';

import Navbar from '../../app/navbar'
import UserListContainer from './userListContainer'
import Logo from './../../app/logo'
import {Link} from 'react-router'


const UserListView = () => <div>
  <div className="row content">
    <div className="col-sm-2">
      <Logo/>
    </div>

    <div className="col-sm-10">
      <Navbar/>
      <div className="col-sm-12 mainView">
        <h1>
          Users <Link to="/settings/user" className="badge">New user</Link>
        </h1>
        <UserListContainer/>
      </div>
    </div>
  </div>
</div>;


export default UserListView;
