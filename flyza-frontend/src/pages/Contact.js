import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import background from "../assets/background.png";

function Home() {
  const products = [
    { id: 1, name: "Drone X1", image: "/assets/drone.png", price: "$499" },
    { id: 2, name: "Smart Laptop", image: "/assets/laptop.png", price: "$899" },
    { id: 3, name: "Wireless Headphones", image: "/assets/headphones.png", price: "$199" },
    { id: 4, name: "Robotic Arm", image: "/assets/robotic_arm.png", price: "$699" },
    { id: 5, name: "Smartwatch Pro", image: "/assets/smartwatch.png", price: "$249" },
    { id: 6, name: "Gaming Controller", image: "/assets/controller.png", price: "$149" },
    { id: 7, name: "Camera Lens", image: "/assets/camera.png", price: "$349" },
    { id: 8, name: "Bluetooth Speaker", image: "/assets/speaker.png", price: "$99" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 4) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const visibleProducts = products.slice(startIndex, startIndex + 4);

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

      {/* Product showcase box */}
      <section className="product-showcase box">
        <h2>Featured Products</h2>
        <div className="product-container">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
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
