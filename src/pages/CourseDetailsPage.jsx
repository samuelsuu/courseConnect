import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCourses } from '../utils/api';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [course, setCourse] = useState(null);

  // Fetch course details based on the ID
  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courses = await fetchCourses({}, 1); // Fetch all courses
      const selectedCourse = courses.find((c) => c.id === parseInt(id));
      setCourse(selectedCourse);
    };
    fetchCourseDetails();
  }, [id]);

  // Handle enroll action
  const handleEnroll = () => {
    if (!course) return;
  
    setIsLoading(true);
  
    setTimeout(() => {
      if (course.price === 0) {
        alert('Enrollment successful!');
        navigate('/order-summary');
      } else {
        navigate('/payment', {
          state: { amount: course.price }, // Pass the course price to the payment page
        });
      }
    }, 1500);
  };
  
  
  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
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
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      {/* Course Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>

        {/* Course Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-semibold text-gray-700">
              <strong>Skill Level:</strong> {course.skillLevel}
            </p>
            <p className="font-semibold text-gray-700">
              <strong>Price:</strong> ${course.price || 'Free'}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">
              <strong>Category:</strong> {course.category}
            </p>
            <p className="font-semibold text-gray-700">
              <strong>Popularity:</strong> {course.popularity}%
            </p>
          </div>
        </div>

        {/* Enroll Button */}
        <button
          className={`w-full py-3 mt-6 font-semibold rounded ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          } text-white transition`}
          onClick={handleEnroll}
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
            'Enroll Now'
          )}
        </button>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
