import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Try to get user from context first
    const user = users.find((u) => u.id === parseInt(id));

    if (user) {
      setFormData(user);
    } else {
      // If not found, fetch from backend
      axios.get(`http://localhost:5000/users/${id}`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/users/${id}`, formData)
      .then((res) => {
        // Update user in context
        const updatedUsers = users.map((user) =>
          user.id === parseInt(id) ? res.data : user
        );
        setUsers(updatedUsers);
        alert("User updated successfully!");
        navigate("/");
      })
      .catch((err) => console.error("Error updating user:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✏️ Edit User</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
