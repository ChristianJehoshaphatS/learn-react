import React, { Component } from "react";
import "./App.css";
import DropdownMenu from "./DropMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={`img/a.png`} alt="aaaa" />
        <div className="Vidtitle">
          <p>lofi hip hop - beats to sleep to</p>
          <DropdownMenu className="Drop" />
        </div>
        <div className="Vid">
          <p>the bootleg boy</p>
          <div className="watch">
            <p>1.2M Views .</p>
            <p> 3 Months Ago</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
