// App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <div className="center">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Name</label>
          </div>
          <div className="txt_field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="cpassword"
              value={formData.cpassword}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Sign Up" />
          <div className="signup_link">
            Have an Account ? <a href="loginForm.php">Login Here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
