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
        label: "Crossover Drill",
        value: "Crossover Drill",
      },
      {
        label: "Laps",
        value: "Laps",
      },
      {
        label: "Blueline and Back Drill",
        value: "Blueline and Back Drill",
        
      },
      {
        label: "Stopping Drill",
        value: "Stopping Drill",
        
      },
      {
        label: "Shooting Blueline",
        value: "Shooting Blueline",
      },
      {
        label: "Shooting Hashmarks",
        value: "Shooting Hashmarks",
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
