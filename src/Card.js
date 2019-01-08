import React, { Component } from "react";
import Dropdown from "./DropMenu";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img className="image" src={`img/a.png`} alt="aaaa" />
        <div className="Vidtitle">
          <p>lofi hip hop - beats to sleeps to</p>
          <Dropdown className="Drop" />
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

export default Card;
