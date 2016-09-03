var React = require('react');
import { Link } from 'react-router'

const Menu = () =>
  <div className="list-group table-of-contents" role="nav">
    <Link to="/" className="list-group-item">Main</Link>
    <Link to="/user" className="list-group-item">User</Link>
  </div>;


export default Menu;
