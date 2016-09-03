var ReactDOM = require('react-dom');
var React = require('react');

const Header = () =>
  <div>
    <nav className="navbar navbar-default">
      <div className="navbar-header navbar-brand">
        ARIJ
      </div>
    </nav>
  </div>;

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
export default Header;
