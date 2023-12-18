// AdmissionForm.js
import React, { useState } from 'react';
import AgeInput from './AgeInput';
import BatchSelection from './BatchSelection';
import FeePayment from './FeePayment';

const AdmissionForm = () => {
  const [age, setAge] = useState(18);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAgeChange = (newAge) => {
    setAge(newAge);
  };

  const handleBatchChange = (newBatch) => {
    setSelectedBatch(newBatch);
  };

  const handleFormSubmit = (success) => {
    setFormSubmitted(success);
  };

  return (
    <div>
      <h2>Yoga Classes Admission Form</h2>
      <AgeInput onAgeChange={handleAgeChange} />
      <BatchSelection onBatchChange={handleBatchChange} />
      <FeePayment age={age} batch={selectedBatch} onSubmit={handleFormSubmit} />
      {formSubmitted && <p>Thank you for submitting the form!</p>}
    </div>
  );
};

export default AdmissionForm;

