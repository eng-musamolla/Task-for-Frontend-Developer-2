import React from "react";
import Card from "./Card";
import "./Column.css";

const Column = ({ title, color }) => {
  return (
    <div className="column">
      <div className="header">
        <div className="column-header">
          <span
            className="column-icon"
            style={{ backgroundColor: color }}
          ></span>
          <h3 style={{ marginBottom: "2px" }}>{title}</h3>
        </div>
        <h3 style={{}}>{0}</h3>
      </div>

      {/* Card component */}
      <div className="card-container">
        {[...Array(10)].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Column;
