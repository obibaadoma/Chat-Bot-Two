// SendButton.js
import React from 'react';

function SendButton({ sendMessage }) {
  return (
    <button onClick={sendMessage}>Send</button>
  );
}

export default SendButton;