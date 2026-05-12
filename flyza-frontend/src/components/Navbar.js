import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <button title="Home">🏠</button>
        <button title="Categories">☰</button>
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
        <button title="Cart">🛒</button>
        <button title="Favorites">❤️</button>
        <button title="About">ℹ️</button>
        <button title="Reward Points">⭐</button>
      </div>
    </header>
  );
}

export default Navbar;
