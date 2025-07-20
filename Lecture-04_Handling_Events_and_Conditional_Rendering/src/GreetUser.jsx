//Handling Events in React
//React handles events similarly to HTML, but with camelCase syntax and JS functions instead of strings.
import React from 'react';

function GreetUser() {
  function handleClick() {
    alert("Hello! 🎉 Welcome to React Events.");
  }

  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Click Event showcase</h2>
      <button
        onClick={handleClick}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
      >
        Greet Me
      </button>
    </div>
  );
}

export default GreetUser;