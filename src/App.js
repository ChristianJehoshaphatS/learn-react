import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="CardContainer">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
