import React, { Component } from "react";
import { Dropdown } from "reactjs-dropdown-component";
import "./DropdownNames.css";
class DropdownNames extends Component {
  constructor() {
    super();
    this.state = {
      currentParticipant: localStorage.getItem("Participant"),
    };
  }

  onChange = (item, name) => {
    console.log(item, name);
    localStorage.setItem("Participant", item.label);
  };
  componentDidMount() {
    const storedValue = localStorage.getItem("Participant");
    if (storedValue) {
      this.setState({ currentParticipant: storedValue }, () => {
        console.log(this.state.currentParticipant);
      });
    }
  }

  render() {
    const participants = [
      {
        label: "Braden",
        value: "braden",
      },
      {
        label: "Drake",
        value: "drake",
      },
      {
        label: "Connor",
        value: "connor",
      },
      {
        label: "Eric",
        value: "eric",
      },
    ];
    return (
      <div className="dropdownNames">
        Choose a Participant:
        <Dropdown
          name="participants"
          title={this.state.currentParticipant}
          list={participants}
          onChange={this.onChange}
          styles={{
            headerTitle: { color: "black", fontWeight: 1000 },
            listItem: { color: "black" },
          }}
        />
      </div>
    );
  }
}

export default DropdownNames;
