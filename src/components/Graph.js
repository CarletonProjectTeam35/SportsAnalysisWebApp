import React, { Component } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
class DataGraph extends Component {
  //Right now it only gets the data when this component is present but we might want to do it all the time
  constructor(props) {
    super(props);
    this.state = { graphData: [], graphTime: [] };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ graphData: JSON.parse(localStorage.getItem("EmgData")) });
      this.setState({
        graphTime: JSON.parse(localStorage.getItem("EmgTime")),
      });
      console.log(this.state.graphData);
      console.log(this.state.graphTime);
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
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
              text: "EMG Sensors",
            },
          },
        }}
        data={{
          labels,
          datasets: [
            //Do a for loop for the amount of datasets there are
            //Add a clear button on the opposite side of the record mode button
            {
              label: "Emg Sensor 1", //Prop
              data: this.state.graphData,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgb(255, 99, 132)",
            },
            {
              label: "Emg Sensor 2", //Prop
              data: this.state.graphData,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgb(53, 162, 235)",
            },
            {
              label: "Emg Sensor 3",
              data: this.state.graphData,
              borderColor: "rgb(50,205,50)",
              backgroundColor: "rgb(50,205,50)",
            },
            {
              label: "Emg Sensor 4",
              data: this.state.graphData,
              borderColor: "rgb(252, 118, 5 )",
              backgroundColor: "rgba(252, 118, 5 )",
            },
            {
              label: "Emg Sensor 5",
              data: this.state.graphData,
              borderColor: "rgb(187, 51, 255)",
              backgroundColor: "rgba(187, 51, 255)",
            },
            {
              label: "Emg Sensor 6",
              data: this.state.graphData,
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
