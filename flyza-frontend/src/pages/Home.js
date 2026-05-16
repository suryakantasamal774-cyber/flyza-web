import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import background from "../assets/background.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />

      <section className="hero box">
        <h1>Welcome to Flyza</h1>
        <p>
          Your trusted marketplace for <strong>new</strong> and
          <strong> pre‑owned products</strong> — drones, electronics, robotics,
          and more, tailored to your needs.
        </p>
        <button className="shop-btn">Start Shopping</button>
      </section>

      <section className="features box">
        <h2>Why Shop With Us?</h2>
        <ul>
          <li>Wide range of categories</li>
          <li>Affordable options for every budget</li>
          <li>Eco‑friendly choices through re‑use</li>
          <li>Customer‑centric shopping experience</li>
        </ul>
      </section>

      <section className="quick-links box">
        <h2>Explore Categories</h2>
        <div className="links">
          <a href="/categories/drones">🚁 Drones</a>
          <a href="/categories/electronics">💻 Electronics</a>
          <a href="/categories/robotics">🤖 Robotics</a>
          <a href="/categories/essentials">📦 Essentials</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
