import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();

  // Example enrolled courses with progress
  const enrolledCourses = [
    { id: 1, title: 'JavaScript Basics', completion: 50 },
    { id: 2, title: 'Advanced React', completion: 20 },
    { id: 3, title: 'UI/UX Design Fundamentals', completion: 100 },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <div className="border p-6 rounded shadow-md">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="mb-4">
            <h2 className="font-semibold">{course.title}</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${course.completion}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2">Progress: {course.completion}%</p>
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => navigate('/')}
      >
        Back to Courses
      </button>
    </div>
  );
};

export default OrderSummary;
