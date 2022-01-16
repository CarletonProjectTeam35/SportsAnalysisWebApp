import React, { Component } from "react";
import { Dropdown } from "reactjs-dropdown-component";
import "./DropdownDrills.css";
class DropdownDrills extends Component {
  constructor() {
    super();
    this.state = {
      currentDrill: localStorage.getItem("Drill"),
    };
  }

  onChange = (item, name) => {
    console.log(item, name);
    localStorage.setItem("Drill", item.label);
  };
  componentDidMount() {
    const storedValue = localStorage.getItem("Drill");
    if (storedValue) {
      this.setState({ currentDrill: storedValue }, () => {
        console.log(this.state.currentDrill);
      });
    }
  }

  render() {
    const drills = [
      {
        label: "Drill_1",
        value: "drill_1",
      },
      {
        label: "Drill_2",
        value: "drill_2",
      },
      {
        label: "Drill_3",
        value: "drill_3",
      },
      {
        label: "Drill_4",
        value: "drill_4",
      },
    ];
    return (
      <div className="dropdown">
        Choose a Drill:
        <Dropdown
          name="drills"
          title={this.state.currentDrill}
          list={drills}
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

export default DropdownDrills;
