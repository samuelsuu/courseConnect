import React from 'react';

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{course.description}</p>
      <p className="mt-4 text-blue-600 font-medium">${course.price}</p>
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`px-2 py-1 text-sm rounded-md ${
            course.skillLevel === 'beginner'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {course.skillLevel.charAt(0).toUpperCase() + course.skillLevel.slice(1)}
        </span>
        <span className="text-gray-500 text-sm">{course.popularity}% Popularity</span>
      </div>
    </div>
  </div>
);

export default CourseCard;
