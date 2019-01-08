import React, { Component } from "react";
import "./DropMenu.css";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="menu">
        <img
          className="menu-img"
          src={`img/3dot.png`}
          onClick={this.showMenu}
          alt="Show Menu"
        />

        {this.state.showMenu ? (
          <div
            className="menu-choice"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button>
              {" "}
              <p>Not Interested</p>{" "}
            </button>
            <button>
              {" "}
              <p>Save to Watch Later</p>{" "}
            </button>
            <button>
              {" "}
              <p>Save to Playlist</p>{" "}
            </button>
            <button>
              {" "}
              <p>Report</p>{" "}
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
