import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👥 User List</h2>
      <Link to="/add">➕ Add User</Link>
      {users.map((user) => (
        <div key={user.id} style={{ margin: "10px 0", border: "1px solid gray", padding: "10px" }}>
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
