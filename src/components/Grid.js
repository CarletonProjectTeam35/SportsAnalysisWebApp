import React, { useState, Component } from "react";
import { render } from "react-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { db } from "../firebase";

class DataGrid extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    db.collection("Emg")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          console.log(element.data());
          this.setState({
            data: this.state.data.concat({
              participant: element.data().participant,
              drill: element.data().switchModeHockey,
              mode: element.data().switchModeTraining,
              time: element.data().emgTime,
            }),
          });
        });
      });
    db.collection("Gyro")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          console.log(element.data());
          this.setState({
            data: this.state.data.concat({
              participant: element.data().participant,
              drill: element.data().switchModeHockey,
              mode: element.data().switchModeTraining,
              time: element.data().gyroTime,
            }),
          });
        });
      });
    db.collection("Pressure")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          console.log(element.data());
          this.setState({
            data: this.state.data.concat({
              participant: element.data().participant,
              drill: element.data().switchModeHockey,
              mode: element.data().switchModeTraining,
              time: element.data().pressureTime,
            }),
          });
        });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="ag-theme-alpine" style={{ height: 700, width: "100%" }}>
        <AgGridReact
          rowData={this.state.data}
          defaultColDef={{
            width: 500,
            sortable: true,
          }}
          //rowData={this.state.participant}
        >
          <AgGridColumn field="participant"></AgGridColumn>
          <AgGridColumn field="drill"></AgGridColumn>
          <AgGridColumn field="mode"></AgGridColumn>
          <AgGridColumn field="time"></AgGridColumn>
        </AgGridReact>
      </div>
    );
  }
}

export default DataGrid;
