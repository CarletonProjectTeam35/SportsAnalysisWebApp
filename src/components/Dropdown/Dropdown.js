import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownValue: this.props.name,
    };
  }

  componentDidMount() {
    let storedValue = null;

    if (this.props.name == "Environment") {
      storedValue = sessionStorage.getItem("SwitchModeTraining");
    } else if (this.props.name == "Action") {
      storedValue = sessionStorage.getItem("SwitchModeHockey");
    } else if (this.props.name == "Participant") {
      storedValue = sessionStorage.getItem("Participant");
    } else if (this.props.name == "Drill") {
      storedValue = sessionStorage.getItem("Drill");
    }
    if (storedValue) {
      this.setState({ dropDownValue: storedValue }, () => {});
    }
  }

  changeValue(text) {
    this.setState({ dropDownValue: text });
    console.log(text);
    if (this.props.name == "Environment") {
      sessionStorage.setItem("SwitchModeTraining", text);
    } else if (this.props.name == "Action") {
      sessionStorage.setItem("SwitchModeHockey", text);
    } else if (this.props.name == "Participant") {
      sessionStorage.setItem("Participant", text);
    } else if (this.props.name == "Drill") {
      sessionStorage.setItem("Drill", text);
    }
  }

  render() {
    if (this.props.name == "Environment") {
      return (
        <DropdownButton
          id="dropdown-item-button"
          title={this.state.dropDownValue}
          className="format"
        >
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            On Ice
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Off Ice
          </Dropdown.Item>
        </DropdownButton>
      );
    } else if (this.props.name == "Action") {
      return (
        <DropdownButton
          id="dropdown-item-button"
          title={this.state.dropDownValue}
          className="format"
        >
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Skating
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Shooting
          </Dropdown.Item>
        </DropdownButton>
      );
    } else if (this.props.name == "Participant") {
      return (
        <DropdownButton
          id="dropdown-item-button"
          title={this.state.dropDownValue}
          className="format"
        >
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Connor
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Braden
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Drake
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Marko
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Kate
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Mario
          </Dropdown.Item>
        </DropdownButton>
      );
    } else if (this.props.name == "Drill") {
      return (
        <DropdownButton
          id="dropdown-item-button"
          title={this.state.dropDownValue}
          className="format"
        >
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Crossover Drill
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Laps
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Blueline and Back Drill
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Stopping Drill
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Shooting Blueline
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => this.changeValue(e.target.textContent)}
          >
            Shooting Hashmarks
          </Dropdown.Item>
        </DropdownButton>
      );
    }
  }
}

export default Dropdown;
