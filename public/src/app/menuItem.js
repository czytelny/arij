var React = require('react');
import { Link } from 'react-router'

const MenuItem = ({url, title}) =>
  <Link to={url} className="list-group-item" activeStyle={{ color: 'red' }}>{title}</Link>;

export default MenuItem;
