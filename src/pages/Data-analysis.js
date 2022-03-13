import React, { useState } from "react";
import DataPlot from "../components/Plot/Plot";
import CompareTable from "../components/CompareTable/CompareTable";
import { Button } from "react-bootstrap";
import PlotSwitch from "../components/Switch/Switch";

const DataAnalysis = () => {
  function onClick() {
    window.tableComponent.resetData();
    window.plotComponent.resetData();
  }

  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="mb-2" style={{ marginTop: "9%", marginLeft: "5%" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <PlotSwitch />
            </li>
            <li>
              <Button
                onClick={() => window.plotComponent.plotData()}
                variant="primary"
                size="lg"
                style={{ margin: 10 }}
              >
                Plot Data
              </Button>
            </li>
            <li>
              {" "}
              <Button
                onClick={() => onClick()}
                variant="danger"
                size="lg"
                style={{ margin: 10 }}
              >
                Reset Data
              </Button>{" "}
            </li>
          </ul>
        </div>

        <div
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            marginLeft: "10%",
          }}
        >
          <DataPlot />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          textAlign: "center",
          marginLeft: "2%",
        }}
      >
        <CompareTable />
      </div>
    </>
  );
};

export default DataAnalysis;
