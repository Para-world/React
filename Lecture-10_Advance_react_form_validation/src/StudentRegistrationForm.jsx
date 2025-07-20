import { useState } from "react";

export default function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    course: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-gray-800 dark:text-gray-100 absolute">
      <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
        Student Registration
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100"
        />

        <div className="flex gap-4 items-center">
          <label className="font-semibold">Gender:</label>
          {['Male', 'Female'].map((g) => (
            <label key={g} className="flex items-center gap-1 dark:text-gray-100">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={formData.gender === g}
                onChange={handleChange}
              />
              <span>{g}</span>
            </label>
          ))}
        </div>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        >
          <option value="">Select Course</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>

        <textarea
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded transition"
        >
          Register
        </button>
      </form>

      <div className="mt-6 p-4 bg-gray-200 dark:bg-gray-800 rounded border dark:border-gray-600">
        <h2 className="text-xl font-semibold mb-2">Preview:</h2>
        <p><strong>Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Course:</strong> {formData.course}</p>
        <p><strong>Address:</strong> {formData.address}</p>
      </div>
    </div>
  );
}