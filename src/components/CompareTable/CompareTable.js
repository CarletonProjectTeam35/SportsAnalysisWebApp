import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { db } from "../../firebase";
const columns = [
  { field: "id", rowDrag: true },
  { field: "participant" },
  { field: "hockeyMode" },
  { field: "drill" },
  { field: "time" },
];

const defaultColDef = {
  flex: 1,
  minWidth: 100,
  sortable: true,
  filter: true,
  resizable: true,
};

export default class extends Component {
  constructor(props) {
    super(props);
    window.tableComponent = this;
    this.state = {
      leftApi: null,
      rightApi: null,
      middleApi: null,
      leftRowData: [],
      rightRowData: [],
      middleRowData: [],
      dataForGraph: [],
      resetData: this.props.reset,
    };

    this.eleftGrid = React.createRef();
    this.erightGrid = React.createRef();
    this.emiddleGrid = React.createRef();
    this.eBin = React.createRef();
    this.eBinIcon = React.createRef();
  }

  resetData() {
    const oldData = [];
    this.state.middleApi.forEachNode((r) => oldData.push(r.data));
    this.state.middleApi.applyTransaction({ remove: oldData });
    this.setState({ dataForGraph: [] });
    sessionStorage.removeItem("entryId");
  }

  componentDidMount() {
    // this.setState({ leftRowData:  });
    //  this.setState({ rightRowData: this.createrightRowData() });
    db.collection("Prod-Data")
      .where("switchModeTraining", "==", "On Ice")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          this.setState({
            leftRowData: this.state.leftRowData.concat({
              id: element.id,
              participant: element.data().participant,
              hockeyMode: element.data().switchModeHockey,
              drill: element.data().drill,
              time: element.data().data.EmgData.emgTime,
            }),
          });
        });
      });

    db.collection("Prod-Data")
      .where("switchModeTraining", "==", "Off Ice")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          console.log(element.data());
          this.setState({
            rightRowData: this.state.rightRowData.concat({
              id: element.id,
              participant: element.data().participant,
              hockeyMode: element.data().switchModeHockey,
              drill: element.data().drill,
              time: element.data().data.EmgData.emgTime,
            }),
          });
        });
      });
  }

  getRowNodeId = (data) => data.id;

  addRecordToGrid(side, data) {
    // if data missing or data has no it, do nothing
    if (!data || data.id == null) {
      return;
    }

    this.setState({ dataForGraph: this.state.dataForGraph.concat(data.id) });
    console.log(this.state.dataForGraph);
    sessionStorage.setItem("entryId", JSON.stringify(this.state.dataForGraph));
    const api = this.state.middleApi;
    // do nothing if row is already in the grid, otherwise we would have duplicates
    const rowAlreadyInGrid = !!api.getRowNode(data.id);
    let transaction;

    if (rowAlreadyInGrid) {
      console.log("not adding row to avoid duplicates in the grid");
      return;
    }

    transaction = {
      add: [data],
    };

    api.applyTransaction(transaction);
  }

  binDrop(data) {
    // if data missing or data has no id, do nothing
    if (!data || data.id == null) {
      return;
    }

    var transaction = {
      remove: [data],
    };

    [this.state.leftApi, this.state.rightApi, this.state.middleApi].forEach(
      (api) => {
        var rowsInGrid = !!api.getRowNode(data.id);

        if (rowsInGrid) {
          api.applyTransaction(transaction);
        }
      }
    );
  }

  addBinZone(params) {
    const dropZone = {
      getContainer: () => this.eBinIcon.current,
      onDragEnter: () => {
        const eBin = this.eBin.current;
        const eBinIcon = this.eBinIcon.current;
        eBin.style.color = "blue";
        eBinIcon.style.transform = "scale(1.5)";
      },
      onDragLeave: () => {
        const eBin = this.eBin.current;
        const eBinIcon = this.eBinIcon.current;
        eBin.style.color = "black";
        eBinIcon.style.transform = "scale(1)";
      },
      onDragStop: (params) => {
        const eBin = this.eBin.current;
        const eBinIcon = this.eBinIcon.current;
        this.binDrop(params.node.data);
        eBin.style.color = "black";
        eBinIcon.style.transform = "scale(1)";
      },
    };

    params.api.addRowDropZone(dropZone);
  }

  addGridDropZone(side, params) {
    const dropSide = "middle";

    const dropZone = {
      getContainer: () => this[`e${dropSide}Grid`].current,
      onDragStop: (dragParams) =>
        this.addRecordToGrid(dropSide.toLowerCase(), dragParams.node.data),
    };

    params.api.addRowDropZone(dropZone);
  }

  onGridReady(side, params) {
    this.addBinZone(params);
    this.addGridDropZone(side, params);

    if (side === "left") {
      this.setState({ leftApi: params.api });
    } else if (side === "middle") {
      this.setState({ middleApi: params.api });
    } else {
      this.setState({ rightApi: params.api });
    }
  }

  getInnerGridCol = (side) => (
    <div className="inner-col">
      <div className="toolbar"></div>
      <div
        style={{ height: "30rem", width: "35rem" }}
        className="inner-col"
        ref={this[`e${side}Grid`]}
      >
        <AgGridReact
          defaultColDef={defaultColDef}
          getRowNodeId={this.getRowNodeId}
          rowDragManaged={true}
          suppressMoveWhenRowDragging={true}
          animateRows={true}
          rowData={this.state[`${side}RowData`]}
          columnDefs={[...columns]}
          onGridReady={this.onGridReady.bind(this, side)}
          modules={[ClientSideRowModelModule]}
        />
      </div>
    </div>
  );

  render = () => (
    <div className=" ag-theme-alpine">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ marginRight: "1%", marginLeft: "1%" }}>
          <h3>On Ice Data </h3>
          {this.getInnerGridCol("left")}
        </div>
        <div style={{ marginRight: "1%", marginLeft: "1%" }}>
          <h3> Data to Plot </h3>
          {this.getInnerGridCol("middle")}
        </div>
        <div style={{ marginRight: "1%", marginLeft: "1%" }}>
          <h3>Off Ice Data </h3>
          {this.getInnerGridCol("right")}
        </div>
      </div>
    </div>
  );
}
