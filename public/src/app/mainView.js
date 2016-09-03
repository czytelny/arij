var React = require('react');
import Header from './header'
import Menu from './menu'

const MainView = () =>  <div>
    <div className="row">
      <Header/>
    </div>
    <div className="row content">
      <div className="col-sm-2">
        <Menu/>
      </div>
      <div className="col-sm-9">
        <div className="col-sm-12">
          <h1>Some content on main page</h1>
        </div>
      </div>
    </div>
  </div>;


export default MainView;
