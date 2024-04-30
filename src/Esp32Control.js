import React, { useState } from 'react';
import axios from 'axios';

const Esp32Control = () => {
  const [text, setText] = useState('');

  const handleLedOn = async () => {
    try {
      await axios.get('http://192.168.18.70/led-on');
      console.log('LED turned on');
    } catch (error) {
      console.error('Error turning LED on:', error);
    }
  };

  const handleLedOff = async () => {
    try {
      await axios.get('http://192.168.18.70/led-off');
      console.log('LED turned off');
    } catch (error) {
      console.error('Error turning LED off:', error);
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSendText = async () => {
    try {
      await axios.post('http://192.168.18.70/send-text', { text });
      console.log('Text sent to ESP32:', text);
    } catch (error) {
      console.error('Error sending text:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLedOn}>Turn LED On</button>
      <button onClick={handleLedOff}>Turn LED Off</button>
      <br></br>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleSendText}>Send Text to ESP32</button>
    </div>
  );
};

export default Esp32Control;
