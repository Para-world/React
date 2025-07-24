import React, { useRef, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current !== null) return; // Prevent multiple intervals
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-900 text-white text-center rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Desi Stopwatch</h2>
      <div className="text-4xl font-mono">{seconds} sec</div>
      <div className="mt-4 space-x-3">
        <button onClick={startTimer} className="px-4 py-2 bg-green-600 rounded">
          Start
        </button>
        <button onClick={stopTimer} className="px-4 py-2 bg-yellow-500 rounded">
          Stop
        </button>
        <button onClick={resetTimer} className="px-4 py-2 bg-red-600 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
