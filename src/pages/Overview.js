import React from "react";
import RecordButton from "../components/RecordButton/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton2";
import DataGauge from "../components/Gauge/Gauge";
import Dropdown2 from "../components/Dropdown/Dropdown";

const Overview = () => {
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
      <div style={{ marginLeft: "20%" }}>
        <DataGauge />
      </div>
    </div>
  );
};

export default Overview;
