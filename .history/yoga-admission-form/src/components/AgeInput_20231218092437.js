// AgeInput.js
import React, { useState } from 'react';

const AgeInput = ({ onAgeChange }) => {
  const [age, setAge] = useState('');

  const handleAgeChange = (e) => {
    const newAge = parseInt(e.target.value, 10);
    setAge(newAge);
    onAgeChange(newAge);
  };

  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={handleAgeChange}
        min="18"
        max="65"
      />
    </div>
  );
};

export default AgeInput;
