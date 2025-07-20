import React, { useState } from "react";

function Courses() {
  const [search, setSearch] = useState("");

  const courses = [
    {
      id: 101,
      title: "💻 JavaScript Mastery",
      description: "Master JavaScript with real-world projects",
    },
    {
      id: 102,
      title: "⚛️ React from Scratch",
      description: "Learn React fundamentals and build cool UIs",
    },
    {
      id: 103,
      title: "🎨 Tailwind CSS Bootcamp",
      description: "Design beautiful UIs with Tailwind CSS",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">📚 Course List</h2>

      {/* Search Input */}
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search a course..."
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/*  Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-xl p-4 hover:scale-[1.02] transition-all"
          >
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
