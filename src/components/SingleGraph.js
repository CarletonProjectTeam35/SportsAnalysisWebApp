import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { db } from "../firebase";
class SingleGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphData0: [],
      graphData1: [],
      graphData2: [],
      graphData3: [],
      graphData4: [],
      graphData5: [],
      graphTime: [],
      graphTitle: this.props.graphTitle,
      sensors: this.props.sensors,
      graphType: this.props.graphType,
    };
  }
  componentDidMount() {
    db.collection("Data")
      .doc(window.location.pathname.slice(14))
      .get()
      .then((DocumentSnapshot) => {
        const data = DocumentSnapshot.data();
        if (this.state.graphType == "Emg") {
          this.setState({
            graphData0: data.data.EmgData.emg1,
          });
          this.setState({
            graphData1: data.data.EmgData.emg2,
          });
          this.setState({
            graphData2: data.data.EmgData.emg3,
          });
          this.setState({
            graphData3: data.data.EmgData.emg4,
          });
          this.setState({
            graphData4: data.data.EmgData.emg5,
          });
          this.setState({
            graphData5: data.data.EmgData.emg6,
          });
          this.setState({
            graphTime: data.data.EmgData.emgTime,
          });
          console.log(data.data.EmgData.emg1);
        }
        if (this.state.graphType == "Gyro") {
          this.setState({
            graphData0: data.data.GyroData.gyro,
          });
          this.setState({
            graphTime: data.data.GyroData.gyroTime,
          });
        }
        if (this.state.graphType == "Pressure") {
          this.setState({
            graphData0: data.data.PressureData.pressurePoint1,
          });
          this.setState({
            graphData1: data.data.PressureData.pressurePoint2,
          });
          this.setState({
            graphTime: data.data.PressureData.pressureTime,
          });
        }
      });
  }
  render() {
    const colours = [
      "rgb(255, 99, 132)",
      "rgb(53, 162, 235)",
      "rgb(50,205,50)",
      "rgb(252, 118, 5 )",
      "rgb(187, 51, 255)",
      "rgb(223, 255, 0)",
    ];
    const data = [];
    const titles = [
      this.state.graphData0,
      this.state.graphData1,
      this.state.graphData2,
      this.state.graphData3,
      this.state.graphData4,
      this.state.graphData5,
    ];
    for (const sensor in this.state.sensors) {
      data.push({
        label: this.state.sensors[sensor],
        data: titles[sensor],
        borderColor: colours[sensor],
        backgroundColor: colours[sensor],
      });
    }
    const labels = this.state.graphTime;
    return (
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: this.state.graphTitle,
            },
          },
        }}
        data={{
          labels,
          datasets: data,
        }}
        height={50}
        width={200}
        scale={{
          myScale: {
            Xaxis: "r",
          },
        }}
      />
    );
  }
}
export default SingleGraph;
