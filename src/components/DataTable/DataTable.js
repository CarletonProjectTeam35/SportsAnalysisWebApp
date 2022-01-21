import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DataTable.css";
import Table from "react-bootstrap/Table";
import TableScrollbar from "react-table-scrollbar";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [],
      graphTime: [],
      graphDataParsed: [],
      title: this.props.sensor,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        graphData: JSON.parse(localStorage.getItem("EmgData0")),
      });
      this.setState({
        graphTime: JSON.parse(localStorage.getItem("EmgTime")),
      });
      this.state.graphDataParsed.push({
        timeStamp: this.state.graphTime[this.state.graphTime.length - 1],
        dataPoint: this.state.graphData[this.state.graphData.length - 1],
      });
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderDataPoint(point, index) {
    return (
      <tr key={index}>
        <td className="cell-text">{point.timeStamp}</td>
        <td className="cell-text">{point.dataPoint}</td>
      </tr>
    );
  }

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <h5 className="title"> {this.state.title}</h5>
        <TableScrollbar rows={5}>
          <Table striped condensed hover className="table-style">
            <thead>
              <tr>
                <th className="header">Timestamp</th>
                <th className="header">Data Point</th>
              </tr>
            </thead>
            <tbody>
              {this.state.graphDataParsed.map(this.renderDataPoint)}
            </tbody>
          </Table>
        </TableScrollbar>
      </div>
    );
  }
}

export default DataTable;
