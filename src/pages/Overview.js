import React from "react";
import RecordButton from "../components/RecordButton/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DataGauge from "../components/Gauge/Gauge";
import Drop from "../components/Dropdown/Dropdown";

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
        <Drop name="Environment" />
        <Drop name="Action" />
        <Drop name="Participant" />
        <Drop name="Drill" />
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
      <div style={{ marginLeft: "20%" }}>
        <DataGauge />
      </div>
    </div>
  );
};

export default Overview;
