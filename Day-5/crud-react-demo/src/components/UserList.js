import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

function UserList() {
  const { users, setUsers } = useContext(UserContext);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      });
  };

  return (
    <div>
      <h2>Users</h2>
      <Link to="/add">Add User</Link>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <Link to={`/edit/${user.id}`}>Edit</Link>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
