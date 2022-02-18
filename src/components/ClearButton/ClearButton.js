import React from "react";
import Popup from "reactjs-popup";
import "./ClearButton.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// const contentStyle = {
//   maxWidth: "600px",
//   width: "90%",
// };

const CustomModal = () => (
  <Popup
    trigger={
      <Button variant="primary" className="button">
        {" "}
        Clear Data{" "}
      </Button>
    }
    modal
  >
    {(close) => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Clear Data? </div>
        <div className="content"> Are you sure you want to clear the data?</div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </button>
          <button
            className="button"
            onClick={() => {
              sessionStorage.removeItem("EmgData0");
              sessionStorage.removeItem("EmgData1");
              sessionStorage.removeItem("EmgData2");
              sessionStorage.removeItem("EmgData3");
              sessionStorage.removeItem("EmgData4");
              sessionStorage.removeItem("EmgData5");
              sessionStorage.removeItem("EmgTime");
              sessionStorage.removeItem("PressureData0");
              sessionStorage.removeItem("PressureData1");
              sessionStorage.removeItem("PressureTime");
              sessionStorage.removeItem("GyroData");
              sessionStorage.removeItem("GyroTime");
              sessionStorage.setItem("DataCleared", 1);

              close();
            }}
          >
            Clear Data
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default CustomModal;
