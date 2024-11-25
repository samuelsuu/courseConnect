import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Simulated payment details
  const transactionDetails = {
    transactionId: 'TXN123456789',
    amount: '$50.00',
    paymentMethod: 'Credit Card',
    date: '2024-11-22',
  };

  const handleViewOrderSummary = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/order-summary'); // Simulate navigation after loading
    }, 1500); // Simulated delay
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
        className={`w-full mt-6 py-3 font-semibold rounded ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        } text-white transition`}
        onClick={handleViewOrderSummary}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </div>
        ) : (
          'View Order Summary'
        )}
      </button>
    </div>
  );
};

export default PaymentPage;
