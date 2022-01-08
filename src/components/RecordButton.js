import React, { Component } from "react";
import Switch from "react-switch";

class RecordButton extends Component {
  constructor() {
    super();
    this.state = { checked: false, dataPoint: [], dataTime: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
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
    if (localStorage.getItem("EmgData") != null) {
      this.setState({ dataPoint: JSON.parse(localStorage.getItem("EmgData")) });
      this.setState({ dataTime: JSON.parse(localStorage.getItem("EmgTime")) });
    }
    let tempTime;
    if (checked) {
      localStorage.setItem("RecordMode", "Recording");
      this.interval = setInterval(() => {
        fetch(
          "https://api.thingspeak.com/channels/1623608/fields/1.json?api_key=5F0TNMB5TYYI54BY&results=1"
        )
          .then((response) => response.json())
          .then((data) => data.feeds)
          .then((newData) => {
            this.setState({
              dataPoint: this.state.dataPoint.concat(newData[0].field1),
            });
            tempTime = new Date(newData[0].created_at).toString();
            this.setState({
              dataTime: this.state.dataTime.concat(
                tempTime.substring(tempTime, tempTime.length - 32)
              ),
            });
          });
        console.log(this.state.dataPoint);
        console.log(this.state.dataTime);
        localStorage.setItem("EmgData", JSON.stringify(this.state.dataPoint));
        localStorage.setItem("EmgTime", JSON.stringify(this.state.dataTime));
      }, 2000);
    } else if (!checked) {
      localStorage.setItem("RecordMode", "NotRecording");
      clearInterval(this.interval);
      //localStorage.removeItem("EmgData");
      //localStorage.removeItem("EmgTime");
    }
  }
  //   fetchData() {
  //     this.interval = setInterval(() => {
  //       fetch(
  //         "https://api.thingspeak.com/channels/1623608/fields/1.json?api_key=5F0TNMB5TYYI54BY&results=1"
  //       )
  //         .then((response) => response.json())
  //         .then((data) => data.feeds)
  //         .then((newData) => {
  //           dataPoint = parseInt(newData[0].field1);
  //           tempTime = new Date(newData[0].created_at).toString();
  //           dataTime = tempTime.substring(tempTime, tempTime.length - 32);
  //         });
  //       console.log(dataPoint);
  //       console.log(dataTime);
  //     }, 15000);
  //   }

  render() {
    return (
      <div
        style={{
          padding: 20,
        }}
      >
        <h2>Record mode:</h2>
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
