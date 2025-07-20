//React Dynamic Styling & Conditional Classes
// Why use dynamic styles?
//You often need to highlight, warn, or animate based on conditions like:

// Active tabs

// Form errors

// Theme switch (light/dark)

// Status indicators

import React, { useState } from 'react';

function ToggleThemeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="text-center p-6 rounded-xl shadow-lg bg-white max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Theme Switch</h2>
        
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded text-white font-semibold transition ${
            darkMode ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-black hover:bg-gray-800'
          }`}
        >
          {darkMode ? 'Switch to Light ☀️' : 'Switch to Dark 🌙'}
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Current Theme: <span className="font-medium">{darkMode ? 'Dark' : 'Light'}</span>
        </p>
      </div>
    </div>
  );
}

export default ToggleThemeButton;

