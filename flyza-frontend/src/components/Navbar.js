import React from "react";
import { Link } from "react-router-dom";
import flyzaLogo from "../assets/flyza-logo.png"; // ✅ Your logo file
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src={flyzaLogo} alt="Flyza Logo" className="nav-logo" />
        </Link>
      </div>

      {/* Center: Search bar */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search drones, electronics, robotics..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      {/* Right: Navigation links */}
      <div className="nav-right">
        <Link to="/categories" title="Categories">Categories</Link>
        <Link to="/cart" title="Cart">Cart</Link>
        <Link to="/favorites" title="Favorites">Favorites</Link>
        <Link to="/about" title="About">About</Link>
        <Link to="/rewards" title="Reward Points">Rewards</Link>
      </div>
    </header>
  );
}

export default Navbar;
