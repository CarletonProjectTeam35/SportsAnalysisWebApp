import React from "react";
import RecordButton from "../components/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import HockeySwitch from "../components/HockeySwitch/HockeySwitch";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";
const Overview = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TypeSwitch />
        <HockeySwitch />
        <DropdownNames />
        <DropdownDrills />
        <RecordButton />
        <ClearButton />
      </div>
    </div>
  );
};

export default Overview;
