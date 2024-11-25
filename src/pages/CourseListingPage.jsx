import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCourses } from '../utils/api';
import SidebarFilter from '../components/SidebarFilter';
// import TopNav from '../components/TopNav';

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: '', skillLevel: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCourses(filters, 1); // Apply filters
      setCourses(data);
    };
    fetchData();
  }, [filters]);

  const handleApplyFilters = async () => {
    const data = await fetchCourses(filters, 1);
    setCourses(data);
  };

  return (
    <div className="container mx-auto p-8">
      {/* <TopNav /> */}
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="sm:mr-6 mb-6 sm:mb-0">
          <SidebarFilter filters={filters} setFilters={setFilters} onApplyFilters={handleApplyFilters} />
        </div>
        
        {/* Courses */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border p-4 rounded shadow-md hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-lg">{course.title}</h2>
              <p className="text-sm">{course.description}</p>
              <p className="text-sm mt-2"><strong>Price:</strong> ${course.price || 'Free'}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseListingPage;
