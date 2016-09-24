var React = require('react');

import Header from '../../app/header'
import UserContainer from './userContainer'
import SettingsMenu from '../settingsMenu'

const UserView = () =>  <div>
  <div className="row">
    <Header/>
  </div>
  <div className="row content">
    <div className="col-sm-2">

    </div>
    <div className="col-sm-9 mainView">
      <div className="col-sm-12">
        <UserContainer/>
      </div>
    </div>
  </div>
</div>;


export default UserView;
