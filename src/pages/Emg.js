import React from "react";
import DataGraph from "../components/Graph";
import RecordButton from "../components/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import HockeySwitch from "../components/HockeySwitch/HockeySwitch";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";
const Emg = () => {
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
      <DataGraph
        graphTitle="EMG Sensors"
        sensors={[
          "EMG sensor 1",
          "EMG sensor 2",
          "EMG sensor 3",
          "EMG sensor 4",
          "EMG sensor 5",
          "EMG sensor 6",
        ]}
      />
    </div>
  );
};

export default Emg;
