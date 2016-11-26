import React from 'react';
import {Link} from 'react-router'

const UserEditActionButtons = ({savingInProgress}) =>
  <div className="row">
    <div className="col-sm-8">
      <button type="submit"
              name="submit"
              value="Submit"
              className="btn btn-primary"
              disabled={savingInProgress}>
        Update
      </button>

      <Link to="/settings/users" className="btn btn-link pull-right">
        Back
      </Link>
    </div>
  </div>;


export default UserEditActionButtons;

