import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Vinod", email: "vinod@email.com" },
    { id: 2, name: "Sneha", email: "sneha@email.com" },
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 User List</h2>
      <Link to="/add" style={{ marginBottom: "10px", display: "inline-block" }}>
        ➕ Add New User
      </Link>
      {users.map((user) => (
        <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <Link to={`/edit/${user.id}`} style={{ marginRight: "10px" }}>✏️ Edit</Link>
          <button onClick={() => handleDelete(user.id)}>🗑️ Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
