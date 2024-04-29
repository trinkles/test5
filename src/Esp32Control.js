import React from 'react';
import axios from 'axios';

const Esp32Control = () => {
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

  return (
    <div>
      <button onClick={handleLedOn}>Turn LED On</button>
      <button onClick={handleLedOff}>Turn LED Off</button>
    </div>
  );
};

export default Esp32Control;
