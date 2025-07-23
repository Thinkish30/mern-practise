import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

function AddUser() {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/users", formData)
      .then((res) => {
        // Add new user to context
        setUsers([...users, res.data]);
        alert("User added successfully!");
        navigate("/");
      })
      .catch((err) => console.error("Error adding user:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>➕ Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
