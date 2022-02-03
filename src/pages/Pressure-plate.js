import React from "react";
import DataGraph from "../components/Graph";
import RecordButton from "../components/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import HockeySwitch from "../components/HockeySwitch/HockeySwitch";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";
import DataTable2 from "../components/DataTable/DataTable2";

const PressurePlate = () => {
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
        <HockeySwitch />
        <DropdownNames />
        <DropdownDrills />
        <RecordButton />
        <ClearButton />
      </div>
      <DataGraph
        graphTitle="Pressure Plate Sensors"
        sensors={["Pressure Plate sensor 1", "Pressure Plate sensor 2"]}
      />
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

          marginTop: 10,
        }}
      >
        <DataTable2
          sensor="PressureData0"
          time="PressureTime"
          title="Pressure sensor 1"
          colour="rgb(255, 99, 132)"
        />
        <DataTable2
          sensor="PressureData1"
          time="PressureTime"
          title="Pressure sensor 2"
          colour="rgb(53, 162, 235)"
        />
      </div>
    </div>
  );
};

export default PressurePlate;
