import React from "react";
import DataGraph from "../components/Graph";
import RecordButton from "../components/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import HockeySwitch from "../components/HockeySwitch/HockeySwitch";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";
import DataTable2 from "../components/DataTable/DataTable2";

const Gyro = () => {
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
      <DataGraph graphTitle="Gyro Sensor" sensors={["Gyro Sensor"]} />
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
          sensor="GyroData"
          time="GyroTime"
          title="Gyro sensor"
          colour="rgb(255, 99, 132)"
        />
      </div>
    </div>
  );
};

export default Gyro;
