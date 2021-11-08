import React from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="app">
      <h1 className="headingTop">Enter a town</h1>
      <Weather />
    </div>
  );
}

export default App;
