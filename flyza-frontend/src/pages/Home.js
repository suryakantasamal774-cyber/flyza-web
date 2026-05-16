import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import background from "../assets/background.png";

// ✅ Import product images
import frame20 from "../assets/20inchframe.jpg";
import speedybee from "../assets/speedybee5.jpg";
import mario from "../assets/mariodc5.jpg";
import volador from "../assets/Volador-VDS-Deadcat-FPV-Frame-Kit_3.jpg";
import arduino from "../assets/Arduino.png";
import headphones from "../assets/headphones.jpg";
import smartwatches from "../assets/smartwatches.jpg";

function Home() {
  // ✅ Use imported images directly
  const products = [
    { id: 1, name: "20 Inch Frame", image: frame20, price: "$299" },
    { id: 2, name: "SpeedyBee 5", image: speedybee, price: "$349" },
    { id: 3, name: "Mario DC 5", image: mario, price: "$329" },
    { id: 4, name: "Volador VD5 Deadcat FPV Frame", image: volador, price: "$379" },
    { id: 5, name: "Arduino Board", image: arduino, price: "$59" },
    { id: 6, name: "Wireless Headphones", image: headphones, price: "$199" },
    { id: 7, name: "Smartwatches", image: smartwatches, price: "$249" },
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
