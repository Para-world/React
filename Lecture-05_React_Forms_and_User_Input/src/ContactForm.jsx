import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center text-blue-700">Contact Form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Submit
      </button>

      {submitted && (
        <div className="text-center text-gray-700 mt-4">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Email:</span> {email}</p>
        </div>
      )}
    </form>
  );
}

export default ContactForm;