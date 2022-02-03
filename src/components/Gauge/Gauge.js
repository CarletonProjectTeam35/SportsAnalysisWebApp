import React, { Component } from "react";
import { RadialGauge, RadialGaugeSeries } from "reaviz";
import { compose } from "redux";
import "./Gauge.css";
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
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const data = [
      { key: "EMG 1 (mV)", data: this.state.emgData0 },
      { key: "EMG 2 (mV)", data: this.state.emgData1 },
      { key: "EMG 3 (mV)", data: this.state.emgData2 },
      { key: "EMG 4 (mV)", data: this.state.emgData3 },
      { key: "EMG 5 (mV)", data: this.state.emgData4 },
      { key: "EMG 6 (mV)", data: this.state.emgData5 },
      { key: "Gyro (m/s^2)", data: this.state.gyroData },
      { key: "Pressure Plate Left (lbs)", data: this.state.pressureData0 },
      { key: "Pressure Plate Right (lbs)", data: this.state.pressureData1 },
    ];
    return (
      <div className="gauge">
        <RadialGauge
          width={700}
          size={600}
          height={600}
          data={data}
          maxValue={1000}
          minValue={0}
          series={<RadialGaugeSeries minGaugeWidth={200} />}
        />
      </div>
    );
  }
}
export default DataGauge;
