import React from 'react';
import {Link} from 'react-router'

const ActionButtons = ({isValid}) =>
  <div className="row">
    <div className="col-sm-8">
      <button type="submit" name="submit" value="Submit"
              className="btn btn-primary"
              disabled={!isValid}>Submit
      </button>

      <Link to="/settings/user" className="btn btn-default pull-right">
        Back
      </Link>
    </div>
  </div>;


export default ActionButtons;

