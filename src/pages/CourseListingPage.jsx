import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCourses } from '../utils/api';
import SidebarFilter from '../components/SidebarFilter';
import Pagination from '../components/Pagination'; 

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: '', skillLevel: '' });
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalCourses, setTotalCourses] = useState(0); 
  const coursesPerPage = 9; 
  const navigate = useNavigate();

  // Fetch courses when filters or currentPage changes
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCourses(filters, currentPage); 
      setCourses(data);
      setTotalCourses(data.length); 
    };
    fetchData();
  }, [filters, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Update the current page
  };

  const handleApplyFilters = async () => {
    setCurrentPage(1); // Reset to page 1 on filter apply
    const data = await fetchCourses(filters, 1);
    setCourses(data);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Available Courses</h1>
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="sm:mr-6 mb-6 sm:mb-0">
          <SidebarFilter filters={filters} setFilters={setFilters} onApplyFilters={handleApplyFilters} />
        </div>

        {/* Courses */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalItems={totalCourses}
            itemsPerPage={coursesPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseListingPage;
