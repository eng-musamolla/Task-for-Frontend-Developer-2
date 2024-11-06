import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <h4>Client Name</h4>
      <p>Lorem ipsum dolor sit amet consectetur...</p>
      <div className="card-details">
        <span>12+</span>
        <span>15</span>
        <span>25</span>
        <span>30-12-2022</span>
      </div>
    </div>
  );
};

export default Card;
