import React, { Component } from "react";
import { Stopwatch } from "hooked-react-stopwatch";
import "hooked-react-stopwatch/css/style.css";
import "./Stopwatch.css";

class RecordTime extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Stopwatch style={{ width: 100 }} />;
  }
}
export default RecordTime;
