import React from "react";
import SingleGraph from "../components/SingleGraph";
const SingleDataHistory = () => {
  return (
    <div>
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
      <SingleGraph
        graphType="Gyro"
        graphTitle="Gyro Sensor"
        sensors={["Gyro Sensor"]}
      />
      <SingleGraph
        graphType="Pressure"
        graphTitle="Pressure Plate Sensors"
        sensors={["Pressure Plate sensor 1", "Pressure Plate sensor 2"]}
      />
    </div>
  );
};

export default SingleDataHistory;
