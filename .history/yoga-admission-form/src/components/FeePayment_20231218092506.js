// FeePayment.js
import React from 'react';

const FeePayment = ({ age, batch }) => {
  const monthlyFee = 500;
  const discount = age >= 50 ? 0.2 : 0; // 20% discount for age 50 and above
  const discountedFee = monthlyFee - monthlyFee * discount;

  return (
    <div>
      <h3>Monthly Fee: {discountedFee} Rs INR</h3>
      <p>Payment details: Payable any time in the month.</p>
      <p>Selected Batch: {batch}</p>
    </div>
  );
};

export default FeePayment;
