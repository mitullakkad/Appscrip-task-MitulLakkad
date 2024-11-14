import React from "react";
import "./productCard.css";

function ProductCard(props) {
  return (
    <div className="card-main-box">
      <img src={props.item.image} className="card-image" alt="Product" />
      <h2 className="product-title-text">{props.item.title}</h2>
      <p className="product-sub-text">{props.item.description}</p>
    </div>
  );
}

export default ProductCard;
