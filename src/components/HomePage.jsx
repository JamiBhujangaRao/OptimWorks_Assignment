import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="Home-section">
        <div className="menu-bar">
          <button className="menu-button">Book Ticket</button>
          <button className="menu-button">View Bookings</button>
          <button className="menu-button">Cancel Booking</button>
        </div>
        <div className="home-content">
          <h1>Welcome to the Home Page</h1>
          <p>This is the main landing page of the application.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
