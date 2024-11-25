import React from 'react';

const ProgressTracker = ({ progress }) => (
  <div className="mt-4">
    <h4 className="text-sm font-medium text-gray-800">Progress</h4>
    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    <span className="text-sm text-gray-600 mt-1">{progress}% completed</span>
  </div>
);

export default ProgressTracker;
