import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get transaction details from state or provide default values
  const transactionDetails = location.state || {
    transactionId: 'Unknown',
    amount: 'Unknown',
    paymentMethod: 'Unknown',
    date: 'Unknown',
  };

  const handleViewOrderSummary = () => {
    navigate('/order-summary');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Payment Confirmation</h1>
      <div className="bg-white border shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Transaction Details</h2>
        <ul className="space-y-2">
          <li className="text-gray-600">
            <strong>Transaction ID:</strong> {transactionDetails.transactionId}
          </li>
          <li className="text-gray-600">
            <strong>Amount:</strong> {transactionDetails.amount}
          </li>
          <li className="text-gray-600">
            <strong>Payment Method:</strong> {transactionDetails.paymentMethod}
          </li>
          <li className="text-gray-600">
            <strong>Date:</strong> {transactionDetails.date}
          </li>
        </ul>
      </div>
      <button
        className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
        onClick={handleViewOrderSummary}
      >
        View Order Summary
      </button>
    </div>
  );
};

export default PaymentPage;
