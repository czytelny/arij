var React = require('react');
import Header from './header'

const MainView = () =>  <div>
    <div className="row">
      <Header/>
    </div>
    <div className="row content">
        <div className="col-sm-12">
          <h1>Content on main page</h1>
          <blockquote><p>Checkout settings, you can add and list users ;)</p></blockquote>
        </div>
    </div>
  </div>;


export default MainView;
