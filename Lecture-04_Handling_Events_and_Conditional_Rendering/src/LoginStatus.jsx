//Conditional Rendering
//You can show/hide UI elements based on conditions (like if, ternary, &&).
import React, { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Login Status</h2>

      <button
        onClick={toggleLogin}
        className={`px-4 py-2 rounded text-white transition ${
          isLoggedIn ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <p className="mt-4 text-gray-700 font-medium">
        {isLoggedIn ? 'You are logged in ✅' : 'Please log in 🔐'}
      </p>
    </div>
  );
}

export default LoginStatus;