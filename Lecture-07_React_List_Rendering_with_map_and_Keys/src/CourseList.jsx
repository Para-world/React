import React from "react";

function CourseList() {
  const courses = [
    { id: 101, title: "JavaScript Mastery" },
    { id: 102, title: "React from Scratch" },
    { id: 103, title: "Tailwind CSS Bootcamp" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">📚 Course List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-xl p-4 hover:scale-[1.02] transition-all"
          >
            <h3 className="text-lg font-semibold">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
