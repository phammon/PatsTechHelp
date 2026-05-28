import React from 'react';

export default function PaySuccess() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
      <h1 className="text-2xl font-bold text-green-400 mb-4">Payment Successful!</h1>
      <p className="text-white mb-4">Thank you for your payment. Your transaction was completed successfully.</p>
      <a href="/" className="text-blue-400 underline">Return to Home</a>
    </div>
  );
}
