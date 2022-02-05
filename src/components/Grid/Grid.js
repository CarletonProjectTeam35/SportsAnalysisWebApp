import React, { Component } from "react";
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
          headerName: "Recording Id",
          field: "recordingId",
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
          sortable: true,
          filter: true,
          minWidth: 250,
        },
        {
          field: "participant",
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
          minWidth: 250,
        },
        {
          field: "data",
          minWidth: 300,
        },
        { field: "csvFile", minWidth: 350 },
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
      db.collection("Prod-Data").doc(rowNode.data.recordingId).delete();
    });
  };
  convertToCsv = (clickedData) => {
    const dataArray = [
      [
        "Recording",
        "Time",
        "Participant",
        "Hockey Mode",
        "Training Mode",
        "Drill",
        "EMG 1",
        "EMG 2",
        "EMG 3",
        "EMG 4",
        "EMG 5",
        "EMG 6",
        "Gyro",
        "Pressure 1",
        "Pressure 2",
      ],
    ];
    db.collection("Prod-Data")
      .doc(clickedData.recordingId)
      .get()
      .then((DocumentSnapshot) => {
        const data = DocumentSnapshot.data();
        console.log(data);
        for (let dataPoint in data.data.EmgData.emg1) {
          dataArray.push([
            clickedData.recordingId,
            data.data.EmgData.emgTime[dataPoint],
            data.participant,
            data.switchModeHockey,
            data.switchModeTraining,
            data.drill,
            data.data.EmgData.emg1[dataPoint],
            data.data.EmgData.emg2[dataPoint],
            data.data.EmgData.emg3[dataPoint],
            data.data.EmgData.emg4[dataPoint],
            data.data.EmgData.emg5[dataPoint],
            data.data.EmgData.emg6[dataPoint],
            //data.data.EmgData.gyro[dataPoint],
            data.data.PressureData.pressurePoint1[dataPoint],
            data.data.PressureData.pressurePoint2[dataPoint],
            ,
          ]);
        }

        let csvContent = "data:text/csv;charset=utf-8,";

        dataArray.forEach(function (rowArray) {
          let row = rowArray.join(",");
          csvContent += row + "\r\n";
        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", clickedData.recordingId);
        document.body.appendChild(link);
        link.click();
      });
  };

  cellClickHandler = (event) => {
    if (event.column.colId === "data") {
      window.location.href = `/data-history/${event.data.recordingId}`;
    } else if (event.column.colId === "csvFile") {
      this.convertToCsv(event.data);
    }
  };
  componentDidMount() {
    db.collection("Prod-Data")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          this.setState({
            data: this.state.data.concat({
              recordingId: element.id,
              participant: element.data().participant,
              hockeyMode: element.data().switchModeHockey,
              time: element.data().data.EmgData.emgTime,
              drill: element.data().drill,
              trainingMode: element.data().switchModeTraining,
              data: "Click here to see a data breakdown",
              csvFile: "Click here to download csv for this recording",
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
            columnHoverHighlight={true}
            suppressRowHoverHighlight={true}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            suppressRowClickSelection={true}
            rowSelection={this.state.rowSelection}
            rowData={this.state.data}
            pagination={true}
            onGridReady={this.onGridReady}
            onCellClicked={this.cellClickHandler}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}

export default DataGrid;
