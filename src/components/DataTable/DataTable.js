import React, { useState, Component } from "react";
import { render } from "react-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableColour: this.props.colour,
      tableTitleSkating: this.props.titleSkating,
      tableTitleShooting: this.props.titleShooting,
      tableTitle: this.props.title,
      sensor: this.props.sensor,
      time: this.props.time,
      title: this.props.time,
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
    this.interval = setInterval(() => {
      if (window.location.pathname == "/emg") {
        if (sessionStorage.getItem("SwitchModeHockey") === "Skating") {
          this.setState({ tableTitle: this.state.tableTitleSkating });
        } else {
          this.setState({ tableTitle: this.state.tableTitleShooting });
        }
      }

      let dataFetch = [];
      let timeFetch = [];
      if (JSON.parse(sessionStorage.getItem(this.state.sensor) != null)) {
        dataFetch = JSON.parse(sessionStorage.getItem(this.state.sensor));
        timeFetch = JSON.parse(sessionStorage.getItem(this.state.time));
      }
      this.setState({
        data: dataFetch.map(function (x, i) {
          return { DataPoint: x, timeStamp: timeFetch[i] };
        }),
      });
    }, 2000);
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
        <h5
          style={{
            textAlign: "center",
            backgroundColor: `${this.state.tableColour}`,
            padding: 10,
          }}
        >
          {this.state.tableTitle}
        </h5>
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

export default DataTable;
