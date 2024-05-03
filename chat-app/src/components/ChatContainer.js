import React, { useState, useEffect } from 'react';
import Message from './Message';
import InputField from './InputField';
import SendButton from './SendButton';

function ChatContainer() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Function to fetch initial random response on component mount
  const fetchRandomResponse = async () => {
    try {
      const response = await fetch('http://localhost:5000/random-response');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, data.response]);
    } catch (error) {
      console.error('Error fetching random response:', error);
    }
  };

  // Call fetchRandomResponse when the component mounts
  useEffect(() => {
    fetchRandomResponse();
  }, []);

  // Function to send a message to the backend
  // ChatContainer.js
// ...

const sendMessage = async () => {
  if (!inputMessage) return; // Don't send empty message
  try {
    setMessages(prevMessages => [...prevMessages, inputMessage]); // Display user message in chat
    const response = await fetch('/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputMessage }),
    });
    if (!response.ok) {
      const responseBody = await response.text();
      console.error('Error status code:', response.status);
      console.error('Error response body:', responseBody);
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setMessages(prevMessages => [...prevMessages, data.response]); // Display bot response in chat
    setInputMessage(''); // Clear input field
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

// ...

  // Function to handle input field change
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <Message key={index} text={message} />
        ))}
      </div>
      <InputField value={inputMessage} onChange={handleInputChange} />
      <SendButton sendMessage={sendMessage} />
    </div>
  );
}

export default ChatContainer;