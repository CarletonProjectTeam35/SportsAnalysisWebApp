import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
class DataGraph extends Component {
  //Right now it only gets the data when this component is present but we might want to do it all the time
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
      labels: [],
      sensors: this.props.sensors,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (window.location.pathname == "/emg") {
        if (localStorage.getItem("SwitchModeHockey") === "Skating") {
          this.setState({ labels: this.state.sensors.slice(0, 6) });
        } else {
          this.setState({ labels: this.state.sensors.slice(6, 12) });
        }

        this.setState({
          graphData0: JSON.parse(localStorage.getItem("EmgData0")),
        });
        this.setState({
          graphData1: JSON.parse(localStorage.getItem("EmgData1")),
        });
        this.setState({
          graphData2: JSON.parse(localStorage.getItem("EmgData2")),
        });

        this.setState({
          graphData3: JSON.parse(localStorage.getItem("EmgData3")),
        });

        this.setState({
          graphData4: JSON.parse(localStorage.getItem("EmgData4")),
        });

        this.setState({
          graphData5: JSON.parse(localStorage.getItem("EmgData5")),
        });
        this.setState({
          graphTime: JSON.parse(localStorage.getItem("EmgTime")),
        });
      }
      if (window.location.pathname == "/gyro") {
        this.setState({ labels: this.state.sensors });
        this.setState({
          graphData0: JSON.parse(localStorage.getItem("GyroData")),
        });
        this.setState({
          graphTime: JSON.parse(localStorage.getItem("GyroTime")),
        });
      }
      if (window.location.pathname == "/pressure-plate") {
        this.setState({ labels: this.state.sensors });
        this.setState({
          graphData0: JSON.parse(localStorage.getItem("PressureData0")),
        });
        this.setState({
          graphData1: JSON.parse(localStorage.getItem("PressureData1")),
        });
        this.setState({
          graphTime: JSON.parse(localStorage.getItem("PressureTime")),
        });
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

    for (const sensor in this.state.labels) {
      data.push({
        label: this.state.labels[sensor],
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
