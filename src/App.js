import React from "react";
import Column from "./components/Column";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="columns-container">
        <Column title="Incomplete" color="#FF4D4D" />
        <Column title="To Do" color="#4DA6FF" />
        <Column title="Doing" color="#FFD700" />
        <Column title="Under Review" color="#B19CD9" />
        <Column title="Completed" color="#32CD32" />
        <Column title="Overdue" color="#FF6347" />
      </div>
    </div>
  );
}

export default App;
