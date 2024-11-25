import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => (
  <div className="mt-6 flex justify-center space-x-4">
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
    >
      Previous
    </button>
    <span className="text-gray-800 font-medium">Page {currentPage}</span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
    >
      Next
    </button>
  </div>
);

export default Pagination;
