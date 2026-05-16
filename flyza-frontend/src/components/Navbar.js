import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" title="Home">🏠</Link>
        <Link to="/categories" title="Categories">☰</Link>
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search drones, electronics, robotics..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="nav-right">
        <Link to="/cart" title="Cart">🛒</Link>
        <Link to="/favorites" title="Favorites">❤️</Link>
        <Link to="/about" title="About">ℹ️</Link>
        <Link to="/rewards" title="Reward Points">⭐</Link>
      </div>
    </header>
  );
}

export default Navbar;
