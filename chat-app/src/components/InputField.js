// InputField.js
import React from 'react';

function InputField({ value, onChange }) {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      placeholder="Type your message..." 
    />
  );
}

export default InputField;
