import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="error-container">
    <div className="error-icon">⚠️</div>
    <h2>Something went wrong!</h2>
    <p className="error-message">{message}</p>
  </div>
);

export default ErrorMessage;
