import React, { useEffect, useState } from 'react';

function UserListWithSearch() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">User Directory</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mb-6 w-full md:w-1/2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      {loading ? (
        <p className="text-yellow-400">Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
              <p className="text-sm">{user.address.city}</p>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <p className="col-span-full text-red-400">No users match your search.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default UserListWithSearch;
