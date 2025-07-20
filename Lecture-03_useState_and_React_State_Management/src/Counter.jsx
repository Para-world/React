//What is useState?
//useState is a React Hook that lets you add dynamic data (state) to your functional components.
//State allows components to remember values and update the UI when those values change.

import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">React Counter</h2>
      
      <p className="text-xl font-semibold mb-4 text-purple-600">Count: {count}</p>

      <div className="flex justify-center space-x-4">
        <button 
          onClick={() => setCount(count - 1)} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Decrease
        </button>

        <button 
          onClick={() => setCount(count + 1)} 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;