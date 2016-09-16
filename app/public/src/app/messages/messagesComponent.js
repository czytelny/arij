import React from 'react';
import {connect} from 'react-redux';
import actionCreators from './messagesActionCreators'

const messagesComponent = React.createClass({
  componentDidUpdate() {
    this.props.hideMessageWithDelay(this.props.hidingDelay);
  },
  render() {
    return (
      <div className={"arij-messageContainer " + (this.props.isVisible ? '' : 'invisible')}>
        {this.props.errorMessage ?
          <div className="arij-message alert alert-danger">
            <i className="fa fa-lg fa-fw fa-frown-o" aria-hidden="true"/>
            {this.props.errorMessage}
          </div>
          : ''}

        {this.props.successMessage ?
          <div className="arij-message alert alert-success">
            <i className="fa fa-lg fa-fw fa-check-circle" aria-hidden="true"/>
            {this.props.successMessage}
          </div>
          : ''}
      </div>
    );
  }
});


const mapStateToProps = function (store) {
  return {
    isVisible: store.messagesState.get("isVisible"),
    errorMessage: store.messagesState.get("errorMessage"),
    successMessage: store.messagesState.get("successMessage"),
    hidingDelay: store.messagesState.get("hidingDelay"),
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    hideMessageWithDelay: (delay)=> dispatch(actionCreators.hideMessageWithDelay(delay))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(messagesComponent);
