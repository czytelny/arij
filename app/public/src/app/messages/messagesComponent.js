import React from 'react';
import {connect} from 'react-redux';
import actionCreators from './messagesActionCreators'

const messagesComponent = React.createClass({
  componentDidUpdate() {
    setTimeout(()=> {
      this.props.hideComponent();
    }, this.props.hidingDelay);
  },
  render() {
    return (
      <div className={"arij-messageContainer " + (this.props.isVisible ? null : 'invisible')}>
        <div className="arij-message alert alert-danger">
          {this.props.errorMessage}
        </div>
      </div>
    );
  }
});


const mapStateToProps = function (store) {
  return {
    isVisible: store.messagesState.get("isVisible"),
    errorMessage: store.messagesState.get("errorMessage"),
    hidingDelay: store.messagesState.get("hidingDelay"),
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    hideComponent: ()=> dispatch(actionCreators.hideUserMessageError())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(messagesComponent);
