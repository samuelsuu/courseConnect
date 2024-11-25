export const fetchCourses = async (filters, page) => {
  // Mock course data
  const mockData = [
    // Programming Courses
    { id: 1, title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript.', price: 0, skillLevel: 'beginner', category: 'programming', popularity: 95 },
    { id: 2, title: 'Python for Beginners', description: 'Get started with Python programming.', price: 0, skillLevel: 'beginner', category: 'programming', popularity: 90 },
    { id: 3, title: 'Advanced React', description: 'Master React with real-world projects.', price: 50, skillLevel: 'advanced', category: 'programming', popularity: 85 },
    { id: 4, title: 'Node.js Intermediate', description: 'Dive deeper into backend development with Node.js.', price: 30, skillLevel: 'intermediate', category: 'programming', popularity: 80 },
    { id: 5, title: 'Full-Stack Development Bootcamp', description: 'Learn front-end and back-end with a hands-on project.', price: 100, skillLevel: 'advanced', category: 'programming', popularity: 90 },
    { id: 6, title: 'Learn TypeScript', description: 'Boost your JavaScript skills with TypeScript.', price: 20, skillLevel: 'intermediate', category: 'programming', popularity: 70 },

    // Design Courses
    { id: 7, title: 'UI/UX Design Fundamentals', description: 'Learn the basics of creating user-friendly designs.', price: 0, skillLevel: 'beginner', category: 'design', popularity: 85 },
    { id: 8, title: 'Graphic Design Masterclass', description: 'Master graphic design tools and techniques.', price: 60, skillLevel: 'advanced', category: 'design', popularity: 88 },
    { id: 9, title: 'Photoshop Basics', description: 'Get started with Adobe Photoshop.', price: 0, skillLevel: 'beginner', category: 'design', popularity: 75 },
    { id: 10, title: 'Intermediate Sketching Techniques', description: 'Improve your drawing skills with advanced sketching.', price: 20, skillLevel: 'intermediate', category: 'design', popularity: 78 },
    { id: 11, title: 'Web Design Bootcamp', description: 'Create stunning websites using modern tools.', price: 40, skillLevel: 'intermediate', category: 'design', popularity: 82 },
    { id: 12, title: 'Mobile App Design', description: 'Design sleek and functional mobile apps.', price: 70, skillLevel: 'advanced', category: 'design', popularity: 87 },

    // Additional Courses for Variety
    { id: 13, title: 'Machine Learning Basics', description: 'Get started with machine learning concepts.', price: 0, skillLevel: 'beginner', category: 'programming', popularity: 92 },
    { id: 14, title: 'Advanced AI Algorithms', description: 'Master advanced AI techniques.', price: 100, skillLevel: 'advanced', category: 'programming', popularity: 88 },
    { id: 15, title: 'Freelance Design Success', description: 'Turn your design skills into a profitable business.', price: 25, skillLevel: 'intermediate', category: 'design', popularity: 83 },
    { id: 16, title: 'Java Fundamentals', description: 'Learn Java programming for beginners.', price: 0, skillLevel: 'beginner', category: 'programming', popularity: 85 },
    { id: 17, title: 'Web Animation Techniques', description: 'Add stunning animations to your web projects.', price: 35, skillLevel: 'intermediate', category: 'design', popularity: 80 },
    { id: 18, title: 'Data Structures and Algorithms', description: 'Prepare for coding interviews with DSA.', price: 50, skillLevel: 'advanced', category: 'programming', popularity: 89 },
  ];

  // Filter courses based on user inputs
  const filteredCourses = mockData.filter((course) => {
    let isValid = true;
    if (filters.category && filters.category !== course.category) isValid = false;
    if (filters.skillLevel && filters.skillLevel !== course.skillLevel) isValid = false;
    if (filters.isFree !== undefined) {
      const isFree = course.price === 0;
      if (filters.isFree !== isFree) isValid = false;
    }
    return isValid;
  });

  // Pagination logic: 9 courses per page
  const coursesPerPage = 9;
  const startIndex = (page - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  return filteredCourses.slice(startIndex, endIndex);
};
