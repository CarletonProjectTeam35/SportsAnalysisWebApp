import React, { Component } from "react";
import { RadialGauge, RadialGaugeSeries } from "reaviz";
import { compose } from "redux";
class DataGauge extends Component {
  //Right now it only gets the data when this component is present but we might want to do it all the time
  constructor(props) {
    super(props);

    this.state = {
      emgData0: 0,
      emgData1: 0,
      emgData2: 0,
      emgData3: 0,
      emgData4: 0,
      emgData5: 0,
      pressureData0: 0,
      pressureData1: 0,
      gyroData: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (localStorage.getItem("EmgData0") != null) {
        this.setState({
          emgData0: parseInt(JSON.parse(localStorage.getItem("EmgData0"))[0]),
        });
        this.setState({
          emgData1: parseInt(JSON.parse(localStorage.getItem("EmgData1"))[0]),
        });
        this.setState({
          emgData2: parseInt(JSON.parse(localStorage.getItem("EmgData2"))[0]),
        });
        this.setState({
          emgData3: parseInt(JSON.parse(localStorage.getItem("EmgData3"))[0]),
        });
        this.setState({
          emgData4: parseInt(JSON.parse(localStorage.getItem("EmgData4"))[0]),
        });
        this.setState({
          emgData5: parseInt(JSON.parse(localStorage.getItem("EmgData5"))[0]),
        });
        this.setState({
          pressureData0: parseInt(
            JSON.parse(localStorage.getItem("PressureData0"))[0]
          ),
        });
        this.setState({
          pressureData1: parseInt(
            JSON.parse(localStorage.getItem("PressureData1"))[0]
          ),
        });
        this.setState({
          gyroData: parseInt(JSON.parse(localStorage.getItem("GyroData"))[0]),
        });
      } else {
        this.setState({
          emgData0: 0,
        });
        this.setState({
          emgData1: 0,
        });
        this.setState({
          emgData2: 0,
        });
        this.setState({
          emgData3: 0,
        });
        this.setState({
          emgData4: 0,
        });
        this.setState({
          emgData5: 0,
        });
        this.setState({
          pressureData0: 0,
        });
        this.setState({
          pressureData1: 0,
        });
        this.setState({
          gyroData: 0,
        });
      }
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const data = [
      { key: "EMG 1", data: this.state.emgData0 },
      { key: "EMG 2", data: this.state.emgData1 },
      { key: "EMG 3", data: this.state.emgData2 },
      { key: "EMG 4", data: this.state.emgData3 },
      { key: "EMG 5", data: this.state.emgData4 },
      { key: "EMG 6", data: this.state.emgData5 },
      { key: "Gyro", data: this.state.gyroData },
      { key: "Pressure Plate Left", data: this.state.pressureData0 },
      { key: "Pressure Plate Right", data: this.state.pressureData1 },
    ];
    return (
      <RadialGauge
        width={1200}
        height={500}
        data={data}
        series={<RadialGaugeSeries minGaugeWidth={150} />}
      />
    );
  }
}
export default DataGauge;