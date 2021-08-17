import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pratice React App</h1>
      <Weather />
      <footer>
        This project is coded by Tara Ryan and is 
      <a href="https://github.com/TahhRahh/pratice-react-app">
         open sourced.</a>
      </footer>
    </div>
  );
}

export default App;
