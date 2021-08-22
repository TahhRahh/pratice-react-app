import React from "react";
import Weather from "./Weather";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <h1>Tara's Weather App</h1>
      <div className ="container">
      <Weather />
      </div>
      <button>Howdy</button>
      <footer>
        This project is coded by Tara Ryan and is 
      <a href="https://github.com/TahhRahh/pratice-react-app">
         open sourced.</a>
      </footer>
    </div>
  );
}

export default App;
