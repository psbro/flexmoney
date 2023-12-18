import React, { useState } from 'react';

const BatchSelection = () => {
  const [selectedBatch, setSelectedBatch] = useState('');

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  return (
    <div>
      <label htmlFor="batch">Select Batch:</label>
      <select id="batch" value={selectedBatch} onChange={handleBatchChange}>
        <option value="6-7AM">6-7AM</option>
        <option value="7-8AM">7-8AM</option>
        <option value="8-9AM">8-9AM</option>
        <option value="5-6PM">5-6PM</option>
      </select>
    </div>
  );
};

export default BatchSelection;