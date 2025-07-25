import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

function UserList() {
  const { users, setUsers } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 Search value

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.delete(`http://localhost:5000/users/${id}`).then(() => {
        setUsers(users.filter((user) => user.id !== id));
      });
    }
  };

  // 🔎 Filtered list based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 User List</h2>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "300px",
          fontSize: "14px",
        }}
      />

      {/* 🔁 Filtered List */}
      {filteredUsers.map((user) => (
        <div key={user.id} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ccc" }}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <Link
            to={`/edit/${user.id}`}
            style={{ marginRight: "10px" }}
          >
            Edit
          </Link>

          <button onClick={() => handleDelete(user.id)}>
            Delete
          </button>
        </div>
      ))}

      {filteredUsers.length === 0 && (
        <p>No users found for "{searchTerm}"</p>
      )}
    </div>
  );
}

export default UserList;
