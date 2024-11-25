import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount } = location.state || { amount: 0 }; // Get the amount or default to 0

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvv) {
      alert('Please fill in all payment details.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      navigate('/payment-confirmation', {
        state: {
          transactionId: 'TXN123456789',
          amount: `$${amount.toFixed(2)}`, // Pass the amount dynamically
          paymentMethod: 'Credit Card',
          date: new Date().toLocaleDateString(),
        },
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Payment Form</h1>
      <form onSubmit={handleSubmit} className="bg-white border shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Card Number</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">CVV</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="CVV"
              required
            />
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Total Amount:</strong> ${amount.toFixed(2)}
        </p>
        <button
          type="submit"
          className={`w-full py-3 font-semibold rounded ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          } text-white transition`}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
