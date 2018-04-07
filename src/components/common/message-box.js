import React from 'react';

export default ({message, buttonText, onClick}) => {
	return (
    <div className="message-box">
      <div className="message">
        <h1>{message}</h1>
      </div>
      <a className="message-button" onClick={() => onClick()}>{buttonText}</a>
    </div>
	);
}
