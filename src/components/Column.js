import React from "react";
import Card from "./Card";
import "./Column.css";

const Column = ({ item, color }) => {
  console.log(item);
  return (
    <div className="column">
      <div className="header">
        <div className="column-header">
          <span
            className="column-icon"
            style={{ backgroundColor: color }}
          ></span>
          <h3 style={{ marginBottom: "2px" }}>{item?._id}</h3>
        </div>
        <h3 style={{}}>{item?.count}</h3>
      </div>

      {/* Card component */}
      <div className="card-container">
        {item.tasks?.map((task, i) => (
          <Card task={task} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Column;
