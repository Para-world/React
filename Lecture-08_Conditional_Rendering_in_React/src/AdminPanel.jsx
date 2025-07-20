//Logical && (Shorthand for True Condition)
function AdminPanel({ isAdmin }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {isAdmin && <button className="btn">Manage Users</button>}
    </div>
  );
}

export default AdminPanel;