import React from "react";
import Popup from "reactjs-popup";
import "./ClearButton.css";
import {Button, Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


// const contentStyle = {
//   maxWidth: "600px",
//   width: "90%",
// };

const CustomModal = () => (
  <Popup
    trigger={<Button variant="primary" className="button"> Clear Data </Button>}
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
              localStorage.removeItem("EmgData0");
              localStorage.removeItem("EmgData1");
              localStorage.removeItem("EmgData2");
              localStorage.removeItem("EmgData3");
              localStorage.removeItem("EmgData4");
              localStorage.removeItem("EmgData5");
              localStorage.removeItem("EmgTime");
              localStorage.removeItem("PressureData0");
              localStorage.removeItem("PressureData1");
              localStorage.removeItem("PressureTime");
              localStorage.removeItem("GyroData");
              localStorage.removeItem("GyroTime");
              localStorage.setItem("DataCleared", 1);

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
