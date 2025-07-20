import React, { useState, useEffect } from 'react';

function CourseLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // cleanup for good measure
  }, []);

  return (
    <div className="p-4 text-center">
      {loading ? (
        <p className="text-lg text-blue-500">⏳ Loading courses...</p>
      ) : (
        <p className="text-lg text-green-500">✅ Courses loaded!</p>
      )}
    </div>
  );
}

export default CourseLoader;


//- clearTimeout in useEffect — prevents memory leaks if the component unmounts early (especially useful for real-world apps).
