import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // 👈 URL se id le raha hai

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👤 User Profile</h2>
      <p>User ID: <strong>{id}</strong></p>

      {id === "101" && <p>Name: Vinod</p>}
      {id === "102" && <p>Name: Rahul</p>}
      {id !== "101" && id !== "102" && <p>User not found</p>}
    </div>
  );
}

export default User;
