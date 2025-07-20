//When you want to display a list of items (like users, posts, products), you'll often use the .map() function in JSX.

function UserList() {
  const users = [
    { id: 1, name: "Deepak Kumar" },
    { id: 2, name: "Ravi Sharma" },
    { id: 3, name: "Anjali Verma" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">User List</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li
            key={user.id}
            className="bg-gray-100 p-2 rounded shadow text-gray-800"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;




//React needs a key to identify each element uniquely to optimize re-rendering.
// // If you forget the key, React will show a warning, and your list may behave unexpectedly.