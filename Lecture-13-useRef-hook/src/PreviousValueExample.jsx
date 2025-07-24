import React, { useState, useRef, useEffect } from "react";

function PreviousValueExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="p-4">
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}

export default PreviousValueExample;
