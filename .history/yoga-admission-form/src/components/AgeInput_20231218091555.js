import React, { useState } from 'react';

const AgeInput = () => {
  const [age, setAge] = useState('');

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={handleAgeChange}
      />
    </div>
  );
};

export default AgeInput;