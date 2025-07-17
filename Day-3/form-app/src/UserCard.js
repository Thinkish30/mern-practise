import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#1976d2", marginBottom: "8px" }}>{user.name}</h3>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>City:</strong> {user.address.city}
      </p>

      <Link
        to={`/user/${user.id}`}
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "6px 12px",
          backgroundColor: "#1976d2",
          color: "#fff",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        View Details
      </Link>
    </div>
  );
}

export default UserCard;
  