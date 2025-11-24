import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>IRCTC Booking Simulation</h1>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
      </ul>
      <button className="logout-button">
        <a href="/login">Logout</a>
      </button>
    </nav>
  );
}

export default Navbar;
