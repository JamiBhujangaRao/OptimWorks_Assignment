import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = (props) => {
  const { details } = props;
  const { validUsername, validPassword } = details;
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminUsername === validUsername && adminPassword === validPassword) {
      alert("LoggedIn Successfully");

      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };
  return (
    <div className="admin-login-page">
      <h1>Admin Login Page</h1>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newUsername">New Username:</label>
          <input
            type="text"
            id="newUsername"
            name="newUsername"
            placeholder="Admin@username"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Password:</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Password"
            name="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login as Admin</button>
      </form>
    </div>
  );
};

export default AdminPage;
