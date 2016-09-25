var React = require('react');

import Header from '../../app/header'
import UserContainer from './userContainer'
import SettingsMenu from '../settingsMenu'

const UserView = ({params}) =>  <div>
  <div className="row">
    <Header/>
  </div>
  <div className="row content">
    <div className="col-sm-2">

    </div>
    <div className="col-sm-10 mainView">
      <div className="col-sm-12">
        <UserContainer userId={params.userId}/>
      </div>
    </div>
  </div>
</div>;


export default UserView;
