import React from "react";
import DataGraph from "../components/Graph/Graph";
import RecordButton from "../components/RecordButton/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton2";
import DataTable from "../components/DataTable/DataTable";
import Dropdown2 from "../components/Dropdown/Dropdown";

const PressurePlate = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "1rem",
        }}
      >
        <Dropdown2 name="Environment" />
        <Dropdown2 name="Action" />
        <Dropdown2 name="Participant" />
        <Dropdown2 name="Drill" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            paddingRight: "0.7rem",
          }}
        >
          <p style={{ lineHeight: "61px", paddingLeft: "30px" }}>Record: </p>
          <RecordButton />
          <ClearButton style={{ height: "auto !important" }} />
        </div>
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
        <DataTable
          sensor="PressureData0"
          time="PressureTime"
          title="Pressure sensor 1"
          colour="rgb(255, 99, 132)"
        />
        <DataTable
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
