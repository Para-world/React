import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Accessing the DOM node
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus"
        className="border px-3 py-2 w-full rounded"
      />
      <button
        onClick={handleFocus}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
