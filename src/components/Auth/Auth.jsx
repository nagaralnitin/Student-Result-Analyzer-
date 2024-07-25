// src/components/Auth/Auth.jsx

import React, { useState } from "react";
import "./Auth.css";
import "./Login.css";

const Auth = ({ onUserTypeChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); // Default to an empty string

  const handleLogin = async () => {
    try {
      // Assuming teacher's credentials
      if (email === "teacher@example.com" && password === "pass1") {
        onUserTypeChange("teacher");
        console.log("Logged in as a teacher");
      } else {
        // Assuming student's credentials
        onUserTypeChange("student");
        console.log("Logged in as a student");
      }
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* User Type Selection */}
      <label>User Type:</label>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
