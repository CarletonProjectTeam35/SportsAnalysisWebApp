import React from "react";
import DataGraph from "../components/Graph/Graph";
import RecordButton from "../components/RecordButton/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton2";
import DataTable2 from "../components/DataTable/DataTable2";
import Dropdown2 from "../components/Dropdown/Dropdown";

const Emg = () => {
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
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <DataTable2
          sensor="EmgData0"
          time="EmgTime"
          titleSkating="EMG sensor skating 1"
          titleShooting="EMG sensor shooting 1"
          colour="rgb(255, 99, 132)"
        />

        <DataTable2
          sensor="EmgData1"
          time="EmgTime"
          titleSkating="EMG sensor skating 2"
          titleShooting="EMG sensor shooting 2"
          colour="rgb(53, 162, 235)"
        />

        <DataTable2
          sensor="EmgData2"
          time="EmgTime"
          titleSkating="EMG sensor skating 3"
          titleShooting="EMG sensor shooting 3"
          colour="rgb(50,205,50)"
        />

        <DataTable2
          sensor="EmgData3"
          time="EmgTime"
          titleSkating="EMG sensor skating 4"
          titleShooting="EMG sensor shooting 4"
          colour="rgb(252, 118, 5 )"
        />

        <DataTable2
          sensor="EmgData4"
          time="EmgTime"
          titleSkating="EMG sensor skating 5"
          titleShooting="EMG sensor shooting 5"
          colour="rgb(187, 51, 255)"
        />

        <DataTable2
          sensor="EmgData5"
          time="EmgTime"
          titleSkating="EMG sensor skating 6"
          titleShooting="EMG sensor shooting 6"
          colour="rgb(223, 255, 0)"
        />
      </div>
    </div>
  );
};

export default Emg;
