import React, { useEffect, useState } from "react";

function RandomUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API call
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results); // Set the user data
      })
      .catch((err) => console.error("API Error:", err));
  }, []); // Empty dependency => run only on mount

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Random Users</h2>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            margin: "10px auto",
            padding: "10px",
            width: "300px",
            borderRadius: "10px",
          }}
        >
          <img
            src={user.picture.medium}
            alt="user"
            style={{ borderRadius: "50%" }}
          />
          <h4>
            {user.name.first} {user.name.last}
          </h4>
          <p>{user.email}</p>
          <p>{user.dob.age}</p>
        </div>
      ))}
    </div>
  );
}

export default RandomUsers;
