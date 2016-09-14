var React = require('react');

import Header from '../../app/header'
import UserContainer from './userContainer'
import SettingsMenu from '../settingsMenu'
import MessagesComponent from '../../app/messages/messagesComponent'

const UserView = () =>  <div>
  <div className="row">
    <Header/>
    <MessagesComponent />
  </div>
  <div className="row content">
    <div className="col-sm-2">
      <SettingsMenu/>
    </div>
    <div className="col-sm-9 mainView">
      <div className="col-sm-12">
        <UserContainer/>
      </div>
    </div>
  </div>
</div>;


export default UserView;
