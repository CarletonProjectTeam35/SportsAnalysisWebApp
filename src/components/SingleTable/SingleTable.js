import React, { Component } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { db } from "../../firebase";
class SingleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableColour: this.props.colour,
      tableTitle: this.props.title,
      sensor: this.props.sensor,
      tableType: this.props.tableType,
      data: [],
      columnDefs: [
        {
          headerName: "Timestamp",
          field: "timeStamp",
          width: 210,
          sortable: true,
          filter: true,
        },
        {
          field: "DataPoint",
          width: 115,
          sortable: true,
        },
      ],
      defaultColDef: {
        resizable: true,
      },
      rowSelection: "multiple",
      rowData: null,
    };
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  componentDidMount() {
    db.collection("Prod-Data")
      .doc(window.location.pathname.slice(14))
      .get()
      .then((DocumentSnapshot) => {
        const data = DocumentSnapshot.data();

        if (this.state.tableType == "Emg") {
          console.log(data);
          this.setState({
            data: this.state.data.concat({
              DataPoint: data.data.EmgData[this.state.sensor],
              timeStamp: data.data.EmgData.emgTime,
            }),
          });
        }
        if (this.state.graphType == "Gyro") {
          this.setState({
            data: this.state.data.concat({
              DataPoint: data.GyroData[this.state.sensor],
              timeStamp: data.GyroData.gyroTime,
            }),
          });
        }
        if (this.state.graphType == "Pressure") {
          this.setState({
            data: this.state.data.concat({
              DataPoint: data.PressureData[this.state.sensor],
              timeStamp: data.PressureData.pressureTime,
            }),
          });
        }
      });
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        className="ag-theme-alpine"
        style={{ height: 300, width: 300, margin: 5 }}
      >
        <h1
          style={{
            textAlign: "center",
            backgroundColor: `${this.state.tableColour}`,
          }}
        >
          {this.state.tableTitle}
        </h1>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          defaultColDef={this.state.defaultColDef}
          suppressRowClickSelection={true}
          rowSelection={this.state.rowSelection}
          rowData={this.state.data}
          onGridReady={this.onGridReady}
        ></AgGridReact>
      </div>
    );
  }
}

export default SingleTable;
