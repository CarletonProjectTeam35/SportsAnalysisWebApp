import React, { Component } from "react";
import Switch from "react-switch";
import "./Switch.css";

class PlotSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    console.log(checked);
    this.setState({ checked });
    if (checked) {
      sessionStorage.setItem("PlotMode", "Emg");
    } else if (!checked) {
      sessionStorage.setItem("PlotMode", "Pressure");
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
              Pressure Plate
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
                marginLeft: 4,
                paddingRight: 2,
              }}
            >
              EMG Sensors
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </label>
    );
  }
}
export default PlotSwitch;
