import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-white text-3xl font-semibold">
            <Link to="/" className="hover:text-gray-200">
              CourseApp
            </Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white text-lg font-medium hover:text-gray-200">
              Home
            </Link>
            <Link to="/courses" className="text-white text-lg font-medium hover:text-gray-200">
              Courses
            </Link>
            <Link to="/about" className="text-white text-lg font-medium hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="text-white text-lg font-medium hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="bg-blue-600 text-white">
          <Link to="/" className="block py-2 px-4 text-lg hover:bg-blue-700">
            Home
          </Link>
          <Link to="/courses" className="block py-2 px-4 text-lg hover:bg-blue-700">
            Courses
          </Link>
          <Link to="/about" className="block py-2 px-4 text-lg hover:bg-blue-700">
            About
          </Link>
          <Link to="/contact" className="block py-2 px-4 text-lg hover:bg-blue-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
