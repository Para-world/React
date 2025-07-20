import React, { useState } from 'react';

function ToggleText() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Show/Hide Message</h2>

      <button
        onClick={() => setVisible(!visible)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
      >
        {visible ? 'Hide Message' : 'Show Message'}
      </button>

      {visible && <p className="mt-3 text-gray-700">Hello ! Time to watch new episode</p>}
    </div>
  );
}

export default ToggleText;