import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

function AddUser() {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(UserContext);

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({}); // 💡 Validation errors

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    axios.post("http://localhost:5000/users", formData).then((res) => {
      setUsers([...users, res.data]);
      alert("User added successfully!");
      navigate("/");
    });
  };

  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#1976d2",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      <h2>➕ Add New User</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && (
            <div style={{ color: "red", fontSize: "12px" }}>{errors.name}</div>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <div style={{ color: "red", fontSize: "12px" }}>{errors.email}</div>
          )}
        </div>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
