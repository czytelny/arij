import React from 'react';

const chatMessage = React.createClass({
  render() {
    return <p>{this.props.message}</p>;
  }
});

export default chatMessage;
