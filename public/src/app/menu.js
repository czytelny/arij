var React = require('react');
import MenuItem from './menuItem'

const Menu = () =>
  <div className="list-group table-of-contents" role="nav">
    <MenuItem url="/" title="Main"/>
    <MenuItem url="/user" title="Add User"/>
  </div>;


export default Menu;
