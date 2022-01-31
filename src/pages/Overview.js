import React from "react";
import RecordButton from "../components/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import HockeySwitch from "../components/HockeySwitch/HockeySwitch";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";
import DataGauge from "../components/Gauge/Gauge";

const Overview = () => {
  return (
    <div>
      <div
        style={{
          marginBottom: -100,
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
      <div style={{ marginLeft: "20%" }}>
        <DataGauge />
      </div>
    </div>
  );
};

export default Overview;
