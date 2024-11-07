import React from "react";
import Column from "./components/Column";
import "./App.css";
import { useEffect, useState } from "react";

function fetchData() {
  return fetch("https://bt.musamolla.com/")
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching data:", error));
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((fetchedData) => setData(fetchedData));
  }, []);

  return (
    <div className="app">
      <div className="columns-container">
        {data?.map((item, index) => (
          <React.Fragment key={index}>
            <Column item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
