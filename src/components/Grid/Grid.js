import React, { useState, Component } from "react";
import { render } from "react-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { db } from "../../firebase";
import "./Grid.css";
class DataGrid extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      columnDefs: [
        {
          headerName: "Participant",
          field: "participant",
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
          sortable: true,
          filter: true,
        },
        {
          field: "hockeyMode",
          sortable: true,
          filter: true,
        },
        {
          field: "trainingMode",
          sortable: true,
          filter: true,
        },
        {
          field: "drill",
          sortable: true,
          filter: true,
        },
        {
          field: "time",
          sortable: true,
          filter: true,
        },
        {
          field: "data",
          minWidth: 100,
        },
      ],
      defaultColDef: {
        flex: 1,
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

  onRemoveSelected = () => {
    const selectedData = this.gridApi.getSelectedRows();
    const res = this.gridApi.applyTransaction({ remove: selectedData });
    res.remove.forEach(function (rowNode) {
      console.log(rowNode.data.id);
      db.collection("Data").doc(rowNode.data.id).delete();
    });
  };
  rowClickHandler = (event) => {
    window.location.href = `/data-history/${event.data.id}`;
  };
  componentDidMount() {
    db.collection("Data")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          console.log(element.data());
          this.setState({
            data: this.state.data.concat({
              id: element.id,
              participant: element.data().participant,
              hockeyMode: element.data().switchModeHockey,
              time: element.data().data.EmgData.emgTime[0],
              drill: element.data().drill,
              trainingMode: element.data().switchModeTraining,
              data: "Click here to see a data breakdown",
            }),
          });
        });
      });
  }

  render() {
    return (
      <div>
        <button
          style={{
            padding: 20,
            margin: 15,
            backgroundColor: "rgba(73, 63, 252, 1)",
          }}
          onClick={() => this.onRemoveSelected()}
        >
          Remove Selected
        </button>
        <div className="ag-theme-alpine" style={{ height: 700, width: "100%" }}>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            suppressRowClickSelection={true}
            rowSelection={this.state.rowSelection}
            rowData={this.state.data}
            pagination={true}
            onGridReady={this.onGridReady}
            onRowClicked={this.rowClickHandler}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

export default DataGrid;
