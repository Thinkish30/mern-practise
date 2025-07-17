import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

function UserFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 🔴 error handle karne ke liye
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 search box ke liye

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Server Error");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch users 😞");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return <h3 style={{ textAlign: "center" }}>⏳ Loading users...</h3>;

  if (error)
    return (
      <div style={{ textAlign: "center" }}>
        <h3>{error}</h3>
        <button onClick={fetchUsers}>🔁 Retry</button>
      </div>
    );

  // 🔍 Filter logic
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>👥 Users from API</h2>

      <input
        type="text"
        placeholder="🔍 Search user by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          width: "80%",
          margin: "10px auto",
          display: "block",
        }}
      />

      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      {filteredUsers.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>
          No matching users found
        </p>
      )}
    </div>
  );
}

export default UserFetch;
