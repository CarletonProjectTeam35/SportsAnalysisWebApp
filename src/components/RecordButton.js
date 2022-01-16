import React, { Component } from "react";
import Switch from "react-switch";
import { db } from "../firebase";

class RecordButton extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      dataPointEmg0: [],
      dataPointEmg1: [],
      dataPointEmg2: [],
      dataPointEmg3: [],
      dataPointEmg4: [],
      dataPointEmg5: [],
      dataTimeEmg: [],
      dataPointGyro: [],
      dataTimeGyro: [],
      dataPointPressure0: [],
      dataPointPressure1: [],
      dataTimePressure: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    db.collection("Emg").add({
      mode: "Skating",
      type: "Off-ice",
      participant: "Braden",
      emgData0: "55",
      emgData1: "100",
    });
    console.log(
      db
        .collection("Emg")
        .where("mode", "==", "Skating")
        .where("type", "==", "Off-ice")
        .where("participant", "==", "Braden")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            console.log(element.data());
          });
        })
    );
    const storedValue = localStorage.getItem("RecordMode");
    if (storedValue == "Recording") {
      this.setState({ checked: true });
      this.handleChange(true);
    } else if (storedValue == "NotRecording") {
      this.setState({ checked: false });
    }
  }
  handleChange(checked) {
    this.setState({ checked });
    if (localStorage.getItem("EmgData0") != null) {
      this.setState({
        dataPointEmg0: JSON.parse(localStorage.getItem("EmgData0")),
      });
      this.setState({
        dataPointEmg1: JSON.parse(localStorage.getItem("EmgData1")),
      });
      this.setState({
        dataPointEmg2: JSON.parse(localStorage.getItem("EmgData2")),
      });
      this.setState({
        dataPointEmg3: JSON.parse(localStorage.getItem("EmgData3")),
      });
      this.setState({
        dataPointEmg4: JSON.parse(localStorage.getItem("EmgData4")),
      });
      this.setState({
        dataPointEmg5: JSON.parse(localStorage.getItem("EmgData5")),
      });
      this.setState({
        dataTimeEmg: JSON.parse(localStorage.getItem("EmgTime")),
      });
      db.collection("Emg").add({
        switchModeHockey: localStorage.getItem("SwitchModeHockey"),
        switchModeTraining: localStorage.getItem("SwitchModeTraining"),
        participant: localStorage.getItem("Participant"),
        emgData0: JSON.parse(localStorage.getItem("EmgData0")),
        emgData1: JSON.parse(localStorage.getItem("EmgData1")),
        emgData2: JSON.parse(localStorage.getItem("EmgData2")),
        emgData3: JSON.parse(localStorage.getItem("EmgData3")),
        emgData4: JSON.parse(localStorage.getItem("EmgData4")),
        emgData5: JSON.parse(localStorage.getItem("EmgData5")),
        emgTime: JSON.parse(localStorage.getItem("EmgTime")),
      });
    }
    if (localStorage.getItem("GyroData") != null) {
      this.setState({
        dataPointGyro: JSON.parse(localStorage.getItem("GyroData")),
      });
      this.setState({
        dataTimeGyro: JSON.parse(localStorage.getItem("GyroTime")),
      });
      db.collection("Gyro").add({
        switchModeHockey: localStorage.getItem("SwitchModeHockey"),
        switchModeTraining: localStorage.getItem("SwitchModeTraining"),
        participant: localStorage.getItem("Participant"),
        gyroData: JSON.parse(localStorage.getItem("GyroData")),
        gyroTime: JSON.parse(localStorage.getItem("GyroTime")),
      });
    }
    if (localStorage.getItem("PressureData0") != null) {
      this.setState({
        dataPointPressure0: JSON.parse(localStorage.getItem("PressureData0")),
      });
      this.setState({
        dataPointPressure1: JSON.parse(localStorage.getItem("PressureData1")),
      });
      this.setState({
        dataTimePressure: JSON.parse(localStorage.getItem("PressureTime")),
      });
      db.collection("Pressure").add({
        switchModeHockey: localStorage.getItem("SwitchModeHockey"),
        switchModeTraining: localStorage.getItem("SwitchModeTraining"),
        participant: localStorage.getItem("Participant"),
        pressureData0: JSON.parse(localStorage.getItem("PressureData0")),
        pressureData1: JSON.parse(localStorage.getItem("PressureData1")),
        pressureTime: JSON.parse(localStorage.getItem("PressureTime")),
      });
    }
    if (localStorage.getItem("DataCleared") == 1) {
      localStorage.setItem("DataCleared", 0);
      this.setState({ dataPointEmg0: [] });
      this.setState({ dataPointEmg1: [] });
      this.setState({ dataPointEmg2: [] });
      this.setState({ dataPointEmg3: [] });
      this.setState({ dataPointEmg4: [] });
      this.setState({ dataPointEmg5: [] });
      this.setState({ dataTimeEmg: [] });
      this.setState({ dataPointGyro: [] });
      this.setState({ dataTimeGyro: [] });
      this.setState({ dataPointPressure0: [] });
      this.setState({ dataPointPressure1: [] });
      this.setState({ dataTimePressure: [] });
    }
    let tempTimeEmg;
    let tempTimeGyro;
    let tempTimePressure;
    if (checked) {
      localStorage.setItem("RecordMode", "Recording");
      this.interval = setInterval(() => {
        fetch(
          "https://api.thingspeak.com/channels/1623608/feeds.json?api_key=5F0TNMB5TYYI54BY&results=1"
        )
          .then((response) => response.json())
          .then((data) => data.feeds)
          .then((newData) => {
            console.log(newData);
            this.setState({
              dataPointEmg0: this.state.dataPointEmg0.concat(newData[0].field1),
            });
            this.setState({
              dataPointEmg1: this.state.dataPointEmg1.concat(newData[0].field2),
            });
            this.setState({
              dataPointEmg2: this.state.dataPointEmg2.concat(newData[0].field3),
            });
            this.setState({
              dataPointEmg3: this.state.dataPointEmg3.concat(newData[0].field4),
            });
            this.setState({
              dataPointEmg4: this.state.dataPointEmg4.concat(newData[0].field5),
            });
            this.setState({
              dataPointEmg5: this.state.dataPointEmg5.concat(newData[0].field6),
            });
            tempTimeEmg = new Date(newData[0].created_at).toString();
            this.setState({
              dataTimeEmg: this.state.dataTimeEmg.concat(
                tempTimeEmg.substring(tempTimeEmg, tempTimeEmg.length - 32)
              ),
            });
          });

        localStorage.setItem(
          "EmgData0",
          JSON.stringify(this.state.dataPointEmg0)
        );
        localStorage.setItem(
          "EmgData1",
          JSON.stringify(this.state.dataPointEmg1)
        );
        localStorage.setItem(
          "EmgData2",
          JSON.stringify(this.state.dataPointEmg2)
        );
        localStorage.setItem(
          "EmgData3",
          JSON.stringify(this.state.dataPointEmg3)
        );
        localStorage.setItem(
          "EmgData4",
          JSON.stringify(this.state.dataPointEmg4)
        );
        localStorage.setItem(
          "EmgData5",
          JSON.stringify(this.state.dataPointEmg5)
        );
        localStorage.setItem("EmgTime", JSON.stringify(this.state.dataTimeEmg));

        fetch(
          "https://api.thingspeak.com/channels/1632732/feeds.json?api_key=W4G634JOXBRFOQM6&results=1"
        )
          .then((response) => response.json())
          .then((data) => data.feeds)
          .then((newData) => {
            this.setState({
              dataPointGyro: this.state.dataPointGyro.concat(newData[0].field1),
            });
            tempTimeGyro = new Date(newData[0].created_at).toString();
            this.setState({
              dataTimeGyro: this.state.dataTimeGyro.concat(
                tempTimeGyro.substring(tempTimeGyro, tempTimeGyro.length - 32)
              ),
            });
          });

        localStorage.setItem(
          "GyroData",
          JSON.stringify(this.state.dataPointGyro)
        );
        localStorage.setItem(
          "GyroTime",
          JSON.stringify(this.state.dataTimeGyro)
        );
        fetch(
          "https://api.thingspeak.com/channels/1632733/feeds.json?api_key=FOE9M635EZ00Q5H1&results=1"
        )
          .then((response) => response.json())
          .then((data) => data.feeds)
          .then((newData) => {
            this.setState({
              dataPointPressure0: this.state.dataPointPressure0.concat(
                newData[0].field1
              ),
            });
            this.setState({
              dataPointPressure1: this.state.dataPointPressure1.concat(
                newData[0].field2
              ),
            });
            tempTimePressure = new Date(newData[0].created_at).toString();
            this.setState({
              dataTimePressure: this.state.dataTimePressure.concat(
                tempTimePressure.substring(
                  tempTimePressure,
                  tempTimePressure.length - 32
                )
              ),
            });
          });

        localStorage.setItem(
          "PressureData0",
          JSON.stringify(this.state.dataPointPressure0)
        );
        localStorage.setItem(
          "PressureData1",
          JSON.stringify(this.state.dataPointPressure1)
        );
        localStorage.setItem(
          "PressureTime",
          JSON.stringify(this.state.dataTimePressure)
        );
      }, 2000);
    } else if (!checked) {
      localStorage.setItem("RecordMode", "NotRecording");
      clearInterval(this.interval);
    }
  }
  fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data.feeds)
      .then((newData) => {});
  }

  render() {
    return (
      <div
        style={{
          padding: 20,
        }}
      >
        <h4>Record mode: </h4>
        <label htmlFor="material-switch">
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </label>
      </div>
    );
  }
}
export default RecordButton;
