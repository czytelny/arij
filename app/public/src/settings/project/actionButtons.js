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

      <Link to="/settings/project" className="btn btn-link pull-right">
        Back
      </Link>
    </div>
  </div>;


export default ActionButtons;

