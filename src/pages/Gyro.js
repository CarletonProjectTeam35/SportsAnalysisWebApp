import React from "react";
import DataGraph from "../components/Graph/Graph";
import RecordButton from "../components/RecordButton/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton2";
import DataTable2 from "../components/DataTable/DataTable2";
import Dropdown2 from "../components/Dropdown/Dropdown";

const Gyro = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "1rem",
        }}
      >
        <Dropdown2 name="Environment"/>
        <Dropdown2 name="Action"/>
        <Dropdown2 name="Participant"/>
        <Dropdown2 name="Drill"/>
        <div style={{display: "flex", flexDirection: "row", marginLeft: "auto", paddingRight: "0.7rem"}}>
          <p style={{lineHeight: "61px", paddingLeft: "30px"}}>Record: </p>
          <RecordButton />
          <ClearButton style={{height: "auto !important"}} />
        </div>
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
