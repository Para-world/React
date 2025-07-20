// React Forms + Controlled Components
//Why Forms Matter?
//Forms allow users to input data (like name, email, etc.)
//  and send it somewhere — like to a backend, a database, or even just display it on screen.
import React, { useState } from 'react';

function NameForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent reload
    alert(`Welcome, ${name}! 🎉`);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center text-purple-700">React Name Form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
      >
        Submit
      </button>

      {name && (
        <p className="text-center text-gray-700">You typed: <span className="font-semibold">{name}</span></p>
      )}
    </form>
  );
}

export default NameForm;