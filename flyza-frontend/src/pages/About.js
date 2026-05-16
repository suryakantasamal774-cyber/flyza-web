import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-content">
        
        {/* Mission Section */}
        <div className="section-box mission">
          <h1>Our Mission</h1>
          <p>
            Flyza aims to make online shopping seamless, affordable, and eco‑friendly. 
            We connect buyers with both new and pre‑owned products, ensuring value 
            without compromising quality.
          </p>
        </div>

        {/* Vision Section */}
        <div className="section-box vision">
          <h2>Our Vision</h2>
          <p>
            To empower smart shoppers worldwide by building a trusted marketplace 
            that promotes sustainability and innovation in e‑commerce.
          </p>
        </div>

        {/* Why Choose Flyza Section */}
        <div className="section-box why-choose">
          <h2>Why Choose Flyza?</h2>
          <ul>
            <li>Affordable pricing for every budget</li>
            <li>Wide range of categories — drones, electronics, robotics, and more</li>
            <li>Eco‑friendly choices through re‑use and resale</li>
            <li>Customer‑centric shopping experience</li>
          </ul>
        </div>

        {/* Quote Section */}
        <div className="quote-box">
          <p className="quote">"Fly beyond limits"</p>
          <p className="quote-author">— Flyza Team</p>
        </div>

      </div>
    </div>
  );
}
