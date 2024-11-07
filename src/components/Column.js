import React from "react";
import Card from "./Card";
import "./Column.css";

const Column = ({ item }) => {
  let color;

  switch (item._id) {
    case "Incomplete":
      color = "#FF4D4D";
      break;
    case "To Do":
      color = "#4DA6FF";
      break;
    case "Doing":
      color = "#FFD700";
      break;
    case "Under Review":
      color = "#B19CD9";
      break;
    case "Completed":
      color = "#32CD32";
      break;
    case "Overdue":
      color = "#FF6347";
      break;
    default:
      color = "#000000"; // Default color if none of the cases match
  }

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
