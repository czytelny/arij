import React from 'react';

const messagesComponent = ({
  errorMessage,
  isErrorMessageVisible
}) =>
  <div className={"arij-messageContainer " + (isErrorMessageVisible ? null : 'invisible')}>
    <div className="arij-message alert alert-danger">
      {errorMessage}
    </div>
  </div>;


export default messagesComponent;
