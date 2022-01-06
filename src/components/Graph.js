import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import faker from "faker";
class DataGraph extends Component {
  render() {
    const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    return (
      <Line
        options={{
          xAxis: {
            // The axis for this scale is determined from the first letter of the id as `'x'`
            // It is recommended to specify `position` and / or `axis` explicitly.
            type: "time",
          },
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "EMG Sensors",
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "Emg Sensor 1",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgb(255, 99, 132)",
            },
            {
              label: "Emg Sensor 2",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgb(53, 162, 235)",
            },
            {
              label: "Emg Sensor 3",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgb(50,205,50)",
              backgroundColor: "rgb(50,205,50)",
            },
            {
              label: "Emg Sensor 4",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgb(252, 118, 5 )",
              backgroundColor: "rgba(252, 118, 5 )",
            },
            {
              label: "Emg Sensor 5",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgb(187, 51, 255)",
              backgroundColor: "rgba(187, 51, 255)",
            },
            {
              label: "Emg Sensor 6",
              data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
              ),
              borderColor: "rgb(223, 255, 0)",
              backgroundColor: "rgba(223, 255, 0)",
            },
          ],
        }}
        height={100}
        width={600}
        scale={{
          myScale: {
            Xaxis: "r",
          },
        }}
      />
    );
  }
}
export default DataGraph;
