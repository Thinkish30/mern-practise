// src/UserCard.js
import React from 'react';


function UserCard(props) {
  return (
    <div style={{
      border: '2px solid #333',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '250px',
      backgroundColor: '#f0f0f0'
    }}>
      <h2>{props.name}</h2>
      <p><strong>Email:</strong> {props.email}</p>
      <button onClick={() => alert(`Contacting ${props.name}`)}>
        Contact
      </button>
    </div>
  );
}

export default UserCard;
