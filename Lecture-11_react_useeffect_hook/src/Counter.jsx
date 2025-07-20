//useEffect Hook (Side Effects in React)
// The useEffect hook is crucial when you want to perform side effects like:

// Fetching data from an API 

// Interacting with localStorage

// Setting up event listeners

// Running code after render
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Effect ran: Count is", count);
  }, [count]);

  return (
    <div className="p-4 text-white bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Counter with useEffect</h1>
      <p className="mb-2">You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)} 
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Click Me
      </button>
    </div>
  );
}

export default Counter;


