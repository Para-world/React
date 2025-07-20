import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching dummy users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">User List</h1>

      {loading ? (
        <p className="text-yellow-400">Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
              <p className="text-sm">{user.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
