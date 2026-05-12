import React from "react";
import "./ProductCard.css";

function ProductCard({ name, description, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>₹{price}</p>
      <button>Add to Cart</button>
      <button>❤️ Like</button>
    </div>
  );
}

export default ProductCard;
