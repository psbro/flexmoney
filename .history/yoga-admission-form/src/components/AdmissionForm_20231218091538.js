
import React from 'react';
import AgeInput from './AgeInput';
import BatchSelection from './BatchSelection';
import FeePayment from './FeePayment';

const AdmissionForm = () => {
  return (
    <div>
      <h2>Yoga Classes Admission Form</h2>
      <AgeInput />
      <BatchSelection />
      <FeePayment />
    </div>
  );
};

export default AdmissionForm;
