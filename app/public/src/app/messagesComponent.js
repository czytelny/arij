import React from 'react';
import store from '../store'

const messagesComponent = React.createClass({
  getInitialState() {
    return {
      alertMessage: "Aghrrr, something went wrong :(",
    }
  },
  render() {
    return (
      <div className={"arij-messageContainer " + (this.props.isErrorMessageVisible ? null : 'invisible')}>
        <div className="arij-message alert alert-danger">
          {this.state.alertMessage}
        </div>
      </div>
    )
  }
});

export default messagesComponent;
