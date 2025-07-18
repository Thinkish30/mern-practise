import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { id } = useParams(); // user ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // 🔁 Get user data on load
  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
      });
  }, [id]);

  // ✅ Handle Update (PUT)
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/users/${id}`, formData)
      .then(() => {
        alert("User updated successfully!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error updating user:", err);
      });
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