import React, { Component } from "react";
import Switch from "react-switch";
import "./HockeySwitch.css";
class HockeySwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const storedValue = localStorage.getItem("SwitchModeHockey");
    if (storedValue == "Shooting") {
      this.setState({ checked: true });
    } else if (storedValue == "Skating") {
      this.setState({ checked: false });
    }
  }

  handleChange(checked) {
    this.setState({ checked });
    if (checked) {
      localStorage.setItem("SwitchModeHockey", "Shooting");
    } else if (!checked) {
      localStorage.setItem("SwitchModeHockey", "Skating");
    }
  }

  render() {
    return (
      <label htmlFor="small-radius-switch" className="switch">
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          handleDiameter={28}
          offColor="#fff"
          onColor="#fff"
          offHandleColor="#0ff"
          onHandleColor="#08f"
          height={40}
          width={100}
          borderRadius={6}
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                fontWeight: 1000,
                color: "black",
              }}
            >
              Skating
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                fontWeight: 1000,
                color: "black",
              }}
            >
              Shooting
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </label>
    );
  }
}
export default HockeySwitch;
