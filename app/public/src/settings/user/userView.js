var React = require('react');

import Navbar from '../../app/navbar'
import UserContainer from './userContainer'
import Logo from './../../app/logo'

const UserView = ({params}) =>  <div>
  <div className="row content">
    <div className="col-sm-2">
      <Logo/>
    </div>

    <div className="col-sm-10 mainView">
      <Navbar/>
      <div className="col-sm-12 mainView">
        <UserContainer userId={params.userId}/>
      </div>
    </div>
  </div>
</div>;


export default UserView;
