import React from "react";
import RecordTime from "../components/Stopwatch/Stopwatch";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";

const Speed = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: -50,
        }}
      >
        <TypeSwitch />
        <DropdownNames />
        <DropdownDrills />
        <form style={{ marginTop: 20 }} /*onSubmit={this.handleSubmit}*/>
          <label>
            Distance:
            <input
              type="text"
              //value={this.state.value}
              //onChange={this.handleChange}
            />{" "}
          </label>
        </form>
      </div>

      <RecordTime />
    </div>
  );
};

export default Speed;
