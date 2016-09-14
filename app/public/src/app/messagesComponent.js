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
      <div className={this.props.isErrorMessageVisible ? null : 'invisible'}>
        <div className={"arij-messageContainer"}>
          <div className="arij-message alert alert-danger">
            {this.state.alertMessage}
          </div>
        </div>
      </div>)
  }
});

export default messagesComponent;
