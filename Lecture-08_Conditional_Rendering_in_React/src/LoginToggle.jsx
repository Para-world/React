import React, { useState } from "react";

export default function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold">
          {isLoggedIn ? "Welcome, Deepak!" : "Please Log In"}
        </h1>

        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-md text-white font-medium transition ${
            isLoggedIn ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

