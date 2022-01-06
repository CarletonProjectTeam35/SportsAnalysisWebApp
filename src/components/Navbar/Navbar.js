import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import SwitchHockey from "../Switch";
import DropdownBar from "../Dropdown";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  onChange = (item, name) => {
    console.log(item, name);
    localStorage.setItem("Participant", item.value);
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="current-participant">
          {" "}
          Current Participant: <DropdownBar />
        </div>
        <SwitchHockey />
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
