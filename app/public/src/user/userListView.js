var ReactDOM = require('react-dom');
var React = require('react');

import Header from '../app/header'
import UserListContainer from './userListContainer'
import UserListMenu from './userListMenu'

const UserListView = () =>  <div>
  <div className="row">
    <Header/>
  </div>
  <div className="row content">
    <div className="col-sm-2">
      <UserListMenu/>
    </div>
    <div className="col-sm-9">
      <div className="col-sm-12">
        <UserListContainer/>
      </div>
    </div>
  </div>
</div>;


export default UserListView;
