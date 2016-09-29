var React = require('react');
import Navbar from './navbar/navbar'
import Sidenav from './sideNavigation/sidenav'
import MainViewContent from './mainViewContent'

const MainView = () =>
    <div className="row">
      <div className="col-sm-2">
        <Sidenav/>
      </div>
      <div className="col-sm-10 mainView">
        <Navbar/>
        <MainViewContent/>
      </div>
    </div>;


export default MainView;
