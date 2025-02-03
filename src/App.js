import React from "react";
import Weather from "./Weather";
import './App.css';
import './fonts.js';
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Francisco" />
      </div>
    </div>
  );
}