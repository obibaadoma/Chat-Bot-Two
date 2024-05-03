import React from 'react';
// import './components/Message.css';

function Message({ text }) {
  return (
    <div className="message" dangerouslySetInnerHTML={{ __html: text }} />
  );
}

export default Message;

