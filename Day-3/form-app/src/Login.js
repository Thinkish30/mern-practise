import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true); // ✅ Login success
    } else {
      alert("Please enter both email and password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);     // ✅ Login status reset
    setEmail("");             // ✅ Input clear
    setPassword("");          // ✅ Input clear
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Login Page</h2>

      {isLoggedIn ? (
        <>
          <h3>✅ Welcome, {email}!</h3>
          <p>You are now logged in.</p>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
          />
          <br />
          <button
            type="submit"
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
