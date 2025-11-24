import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import "./App.css";

function App() {
  const [validAdminDetails, setValidAdminDetails] = useState([]);

  const setAdminDetails = (details) => {
    setValidAdminDetails(details);
  };

  useEffect(() => {
    const validUsername = localStorage.getItem("adminUserName");
    const validPassword = localStorage.getItem("adminPassword");
    const details = {
      validUsername,
      validPassword,
    };
    setAdminDetails(details);
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route
          exact
          path="/admin"
          element={<AdminPage details={validAdminDetails} />}
        />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
