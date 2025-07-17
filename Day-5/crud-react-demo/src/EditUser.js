import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Static dummy data – actual project me real data fetch karna hoga
    const dummyUser = { name: "Dummy Name", email: "dummy@email.com" };
    setFormData(dummyUser);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User:", formData);
    navigate("/");
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
