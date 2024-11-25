import React, { useState } from 'react';

const SidebarFilter = ({ filters, setFilters, onApplyFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (key, value) => {
    setLocalFilters({ ...localFilters, [key]: value });
  };

  const applyFilters = () => {
    setFilters(localFilters);
    onApplyFilters();
  };

  return (
    <div className="w-full sm:w-64 bg-gray-100 p-4 rounded shadow-md">
      <h2 className="font-bold text-lg mb-4">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Category</label>
        <select
          className="w-full border rounded p-2"
          value={localFilters.category || ''}
          onChange={(e) => handleInputChange('category', e.target.value)}
        >
          <option value="">All</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Price</label>
        <select
          className="w-full border rounded p-2"
          value={localFilters.price || ''}
          onChange={(e) => handleInputChange('price', e.target.value)}
        >
          <option value="">All</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
      </div>

      {/* Skill Level Filter */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Skill Level</label>
        <select
          className="w-full border rounded p-2"
          value={localFilters.skillLevel || ''}
          onChange={(e) => handleInputChange('skillLevel', e.target.value)}
        >
          <option value="">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SidebarFilter;
