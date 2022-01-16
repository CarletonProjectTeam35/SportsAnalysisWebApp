import React from "react";
import RecordButton from "../components/RecordButton";
import ClearButton from "../components/ClearButton/ClearButton";
import DropdownDrills from "../components/DropdownDrills/DropdownDrills";
import HockeySwitch from "../components/HockeySwitch/HockeySwitch";
import DropdownNames from "../components/DropdownNames/DropdownNames";
import TypeSwitch from "../components/TypeSwitch/TypeSwitch";
import { RadialGauge, RadialGaugeSeries } from "reaviz";

const dataSource = {
  //dataSource 0->9 correspond to Speed ->Pressure Plate Right Need more dataSources
  speedData: dataSourceSet("EmgData"),
  emg1Data: dataSourceSet("EmgData"),
  emg2Data: dataSourceSet("EmgData"),
  emg3Data: dataSourceSet("EmgData"),
  emg4Data: dataSourceSet("EmgData"),
  emg5Data: dataSourceSet("EmgData"),
  emg6Data: dataSourceSet("EmgData"),
  pressurePlateLeft: dataSourceSet("EmgData"),
  pressurePlateRight: dataSourceSet("EmgData"),
};
/**
 *
 * @param {*} source
 * @returns a number based off of the current value of the information source
 */
function dataSourceSet(source) {
  return parseFloat(JSON.parse(localStorage.getItem(source)));
}

const data = [
  { key: "Speed", data: dataSource.speedData },
  { key: "EMG 1", data: dataSource.emg1Data },
  { key: "EMG 2", data: dataSource.emg2Data },
  { key: "EMG 3", data: dataSource.emg3Data },
  { key: "EMG 4", data: dataSource.emg4Data },
  { key: "EMG 5", data: dataSource.emg5Data },
  { key: "EMG 6", data: dataSource.emg6Data },
  { key: "Pressure Plate Left", data: dataSource.pressurePlateLeft },
  { key: "Pressure Plate Right", data: dataSource.pressurePlateRight },
];

const Overview = () => {
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
        <RadialGauge
          width={800}
          height={450}
          data={data}
          series={<RadialGaugeSeries minGaugeWidth={150} />}
        />
      </div>
    </div>
  );
};

export default Overview;
