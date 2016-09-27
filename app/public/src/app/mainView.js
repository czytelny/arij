var React = require('react');
import Navbar from './navbar'
import Sidenav from './sidenav'
import MainViewContent from './mainViewContent'

const MainView = () =>
    <div className="row content">
      <div className="col-sm-2">
        <Sidenav/>
      </div>
      <div className="col-sm-10">
        <Navbar/>
        <MainViewContent/>
      </div>
    </div>
  ;


export default MainView;
