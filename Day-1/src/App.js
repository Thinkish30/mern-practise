// src/App.js
import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Card App</h1>
      
      <UserCard name="Vinod Choudhary" email="vinod@example.com" />
      <UserCard name="Rahul Yadav" email="rahul@example.com" />
      <UserCard name="Aarav Sharma" email="aarav@example.com" />
    </div>
  );
}

export default App;
