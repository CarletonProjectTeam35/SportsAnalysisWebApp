import React from "react";
import SingleGraph from "../components/SingleGraph/SingleGraph";
import SingleTable from "../components/SingleTable/SingleTable";

const SingleDataHistory = () => {
  return (
    <div>
      <div style={{ borderStyle: "groove", margin: 10, paddingBottom: 100 }}>
        <h1 style={{ textAlign: "center", marginBottom: 10 }}> EMG Data</h1>
        <SingleGraph
          graphType="Emg"
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
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <SingleTable
            sensor="emg1"
            tableType="Emg"
            title="Emg sensor 1"
            colour="rgb(255, 99, 132)"
          />
          <SingleTable
            sensor="emg2"
            tableType="Emg"
            title="Emg sensor 2"
            colour="rgb(53, 162, 235)"
          />
          <SingleTable
            sensor="emg3"
            tableType="Emg"
            title="Emg sensor 3"
            colour="rgb(50,205,50)"
          />
          <SingleTable
            sensor="emg4"
            tableType="Emg"
            title="Emg sensor 4"
            colour="rgb(252, 118, 5 )"
          />
          <SingleTable
            sensor="emg5"
            tableType="Emg"
            title="Emg sensor 5"
            colour="rgb(187, 51, 255)"
          />
          <SingleTable
            sensor="emg6"
            tableType="Emg"
            title="Emg sensor 6"
            colour="rgb(223, 255, 0)"
          />
        </div>
      </div>

      <div style={{ borderStyle: "groove", margin: 10, paddingBottom: 100 }}>
        <h1 style={{ textAlign: "center", marginBottom: 10 }}> Gyro Data</h1>
        <SingleGraph
          graphType="Gyro"
          graphTitle="Gyro Sensor"
          sensors={["Gyro Sensor"]}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <SingleTable
            sensor="gyro"
            tableType="Gyro"
            title="Gyro sensor 1"
            colour="rgb(255, 99, 132)"
          />
        </div>
      </div>
      <div style={{ borderStyle: "groove", margin: 10, paddingBottom: 100 }}>
        <h1 style={{ textAlign: "center", marginBottom: 10 }}>
          {" "}
          Pressure Plate Data
        </h1>
        <SingleGraph
          graphType="Pressure"
          graphTitle="Pressure Plate Sensors"
          sensors={["Pressure Plate sensor 1", "Pressure Plate sensor 2"]}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <SingleTable
            sensor="pressurePoint1"
            tableType="Pressure"
            title="Pressure sensor 1"
            colour="rgb(255, 99, 132)"
          />
          <SingleTable
            sensor="pressurePoint2"
            tableType="Pressure"
            title="Pressure sensor 2"
            colour="rgb(53, 162, 235)"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleDataHistory;
