// AdmissionForm.js
import React, { useState } from 'react';
import AgeInput from './AgeInput';
import BatchSelection from './BatchSelection';
import FeePayment from './FeePayment';

const AdmissionForm = () => {
  const [age, setAge] = useState(18);
  const [selectedBatch, setSelectedBatch] = useState('');

  const handleAgeChange = (newAge) => {
    setAge(newAge);
  };

  const handleBatchChange = (newBatch) => {
    setSelectedBatch(newBatch);
  };

  return (
    <div>
      <h2>Yoga Classes Admission Form</h2>
      <AgeInput onAgeChange={handleAgeChange} />
      <BatchSelection onBatchChange={handleBatchChange} />
      <FeePayment age={age} batch={selectedBatch} />
    </div>
  );
};

export default AdmissionForm;

