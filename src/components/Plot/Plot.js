import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { db } from "../../firebase";

class DataPlot extends Component {
  constructor(props) {
    super(props);
    window.plotComponent = this;
    this.state = {
      data: [],
    };
  }

  resetData() {
    this.setState({ data: [] });
  }

  plotData() {
    this.state.data = [];
    if (sessionStorage.getItem("PlotMode") == "Emg") {
      const initialArray = [];
      for (let i of JSON.parse(sessionStorage.getItem("entryId"))) {
        db.collection("Prod-Data")
          .doc(i)
          .get()
          .then((querySnapshot) => {
            const emgData = querySnapshot.data().data.EmgData;
            let timeTotal = 0;
            const timePer = 60 / emgData.emgPoint1.length;

            for (let i in emgData.emgPoint1) {
              timeTotal += timePer;
              if (querySnapshot.data().switchModeTraining == "On Ice") {
                initialArray.push({
                  emg1on: emgData.emg1[i],
                  emg2on: emgData.emg2[i],
                  emg3on: emgData.emg3[i],
                  emg4on: emgData.emg4[i],
                  emg5on: emgData.emg5[i],
                  emg6on: emgData.emg6[i],
                  time: timeTotal.toFixed(1),
                });
              } else if (querySnapshot.data().switchModeTraining == "Off Ice") {
                this.setState({
                  data: this.state.data.concat({
                    emg1off: emgData.emg1[i],
                    emg2off: emgData.emg2[i],
                    emg3off: emgData.emg3[i],
                    emg4off: emgData.emg4[i],
                    emg5off: emgData.emg5[i],
                    emg6off: emgData.emg6[i],
                    ...initialArray[i],
                  }),
                });
              }
            }
          });
      }
    }
    if (sessionStorage.getItem("PlotMode") == "Pressure") {
      const initialArray = [];
      for (let i of JSON.parse(sessionStorage.getItem("entryId"))) {
        db.collection("Prod-Data")
          .doc(i)
          .get()
          .then((querySnapshot) => {
            const pressureData = querySnapshot.data().data.PressureData;
            let timeTotal = 0;
            const timePer = 60 / pressureData.pressurePoint1.length;

            for (let i in pressureData.pressurePoint1) {
              timeTotal += timePer;
              if (querySnapshot.data().switchModeTraining == "On Ice") {
                initialArray.push({
                  pressure1on: pressureData.pressurePoint1[i],
                  pressure2on: pressureData.pressurePoint2[i],
                  time: timeTotal.toFixed(1),
                });
              } else if (querySnapshot.data().switchModeTraining == "Off Ice") {
                this.setState({
                  data: this.state.data.concat({
                    pressure1off: pressureData.pressurePoint1[i],
                    pressure2off: pressureData.pressurePoint2[i],

                    ...initialArray[i],
                  }),
                });
              }
            }
          });
      }
    }
  }

  render() {
    const data = [
      { name: "1", uv: 400 },
      { name: "1", uv: 400 },
    ];
    return (
      <LineChart width={1100} height={400} data={this.state.data} margin={{}}>
        <Line type="monotone" dataKey="emg1on" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[-120, 120]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg2on" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg3on" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg4on" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg5on" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg6on" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="pressure1on" stroke="#9400D3" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="pressure2on" stroke="#00FF00" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg1off" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg2off" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg3off" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg4off" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg5off" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line type="monotone" dataKey="emg6off" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis type="number" domain={[0, 20000]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pressure1off"
          stroke="	
#9400D3"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pressure2off" stroke="#00FF00" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  }
}
export default DataPlot;
