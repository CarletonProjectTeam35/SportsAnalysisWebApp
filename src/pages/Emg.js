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
          "EMG sensor skating 1",
          "EMG sensor skating 2",
          "EMG sensor skating 3",
          "EMG sensor skating 4",
          "EMG sensor skating 5",
          "EMG sensor skating 6",
          "EMG sensor shooting 1",
          "EMG sensor shooting 2",
          "EMG sensor shooting 3",
          "EMG sensor shooting 4",
          "EMG sensor shooting 5",
          "EMG sensor shooting 6",
        ]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      ></div>
    </div>
  );
};

export default Emg;
