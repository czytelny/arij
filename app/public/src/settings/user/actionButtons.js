import React from 'react';
import {Link} from 'react-router'

const ActionButtons = ({isValid}) =>
  <div className="row">
    <div className="col-sm-8">
      <button type="submit" name="submit" value="Submit"
              className="btn btn-primary"
              disabled={!isValid}>
        Add
      </button>

      <Link to="/settings/user" className="btn btn-link pull-right">
        Cancel
      </Link>
    </div>
  </div>;


export default ActionButtons;

