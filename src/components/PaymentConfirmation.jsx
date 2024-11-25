import React from 'react';

const PaymentConfirmation = ({ transactionDetails, orderSummary }) => (
  <div className="p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Confirmation</h2>
    <div>
      <h3 className="text-lg font-medium text-gray-700">Transaction Details</h3>
      <p className="text-gray-600">{transactionDetails}</p>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-700">Order Summary</h3>
      <p className="text-gray-600">{orderSummary}</p>
    </div>
  </div>
);

export default PaymentConfirmation;
