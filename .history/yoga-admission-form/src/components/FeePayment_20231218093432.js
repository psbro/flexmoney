// FeePayment.js
import React, { useState } from 'react';

const FeePayment = ({ age, batch, onSubmit }) => {
  const [paymentResponse, setPaymentResponse] = useState(null);

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe', // Replace with actual user input
          age,
          batch,
        }),
      });

      const data = await response.json();
      setPaymentResponse(data);
      onSubmit(data.success); // Notify the parent component about the form submission status
    } catch (error) {
      console.error('Error submitting form:', error);
      setPaymentResponse({ error: 'Error submitting form' });
    }
  };

  return (
    <div>
      <h3>Monthly Fee: {500} Rs INR</h3>
      <p>Payment details: Payable any time in the month.</p>
      <p>Selected Batch: {batch}</p>
      <button onClick={handleFormSubmit}>Submit Form</button>
      {paymentResponse && (
        <div>
          <h4>Payment Response:</h4>
          {paymentResponse.success ? (
            <p>Form submitted successfully! Payment successful.</p>
          ) : (
            <p>Error submitting form: {paymentResponse.error}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FeePayment;

