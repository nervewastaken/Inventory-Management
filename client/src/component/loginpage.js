import React, { useState } from "react";
import Navbar from "./Navbar";

// Navbar component

// Login page component
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login successful, set isLoggedIn to true
        setIsLoggedIn(true);
        setMessage(data.message);
      } else {
        setIsLoggedIn(false);
        setMessage(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p id="message">{message}</p>
        </div>
      </div>
      {/* Conditionally render the Navbar if isLoggedIn is true */}
      {isLoggedIn && <Navbar />}
    </div>
  );
};

export default LoginPage;
