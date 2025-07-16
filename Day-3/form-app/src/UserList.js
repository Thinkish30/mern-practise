import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: "101", name: "Vinod Choudhary" },
  { id: "102", name: "Rahul Singh" },
  { id: "103", name: "Sneha Patel" },
];

function UserList() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>👥 User List</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "15px" }}>
          <h3>{user.name}</h3>
          <Link
            to={`/user/${user.id}`}
            style={{
              padding: "8px 16px",
              backgroundColor: "#1976d2",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
