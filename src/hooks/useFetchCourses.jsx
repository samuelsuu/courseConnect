import { useState, useEffect } from 'react';
import { fetchCourses } from '../utils/api';

const useFetchCourses = (filters, page) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchCourses(filters, page);
      setCourses(data);
      setLoading(false);
    };

    fetchData();
  }, [filters, page]);

  return { courses, loading };
};

export default useFetchCourses;
