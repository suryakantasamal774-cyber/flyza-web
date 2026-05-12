import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import background from "../assets/background.png";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
    </div>
  );
}

export default Home;
