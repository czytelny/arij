import React from 'react';

const ActionButtons = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <button type="submit" name="submit" value="Submit" className="btn btn-primary">Submit</button>
          <button type="button" name="cancel" value="cancel" className="btn btn-link pull-right">Cancel</button>
        </div>
      </div>
    )
  }
});

export default ActionButtons;

