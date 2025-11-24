import { useState } from "react";
import SignupPage from "./SignupPage";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { validUsername } = localStorage.getItem("username");
    const { validPassword } = localStorage.getItem("password");

    if (username.trim() === "" || password.trim() === "") {
      alert("Provide Username and Password");
    } else if (username === validUsername && password === validPassword) {
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  const navigateToAdmin = () => {
    navigate("/admin");
  };
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="Username"
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
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={navigateToAdmin}>
          Admin Login
        </button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
};

export default LoginPage;
