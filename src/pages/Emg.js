import React from "react";
import DataGraph from "../components/Graph";
import RecordButton from "../components/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import HockeySwitch from "../components/HockeySwitch/HockeySwitch";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";
import DataTable from "../components/DataTable/DataTable";
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <DataTable sensor="EMG sensor 1" />
        <DataTable sensor="EMG sensor 2" />
        <DataTable sensor="EMG sensor 3" />
        <DataTable sensor="EMG sensor 4" />
        <DataTable sensor="EMG sensor 5" />
        <DataTable sensor="EMG sensor 6" />
      </div>
    </div>
  );
};

export default Emg;
