import React from 'react';
import {Link} from 'react-router'

const ActionButtons = ({errors}) =>
  <div className="row">
    <div className="col-sm-8">
      <button type="submit" name="submit" value="Submit"
              className="btn btn-primary"
              disabled={
                errors.getIn(["name", "required"]) ||
                errors.getIn(["email", "required"]) ||
                errors.getIn(["password", "required"]) ||
                errors.getIn(["password", "confirmed"])
              }>
        Add
      </button>

      <Link to="/settings/user" className="btn btn-link pull-right">
        Back
      </Link>
    </div>
  </div>;


export default ActionButtons;

