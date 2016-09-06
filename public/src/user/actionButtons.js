import React from 'react';
import {Link} from 'react-router'

const ActionButtons = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <button type="submit" name="submit" value="Submit" className="btn btn-primary">Submit</button>
          <Link to="/settings/user">
            <button type="button" name="back" className="btn btn-default pull-right">Cancel</button>
          </Link>
        </div>
      </div>
    )
  }
});

export default ActionButtons;

