import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ClearButton extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  closeAndClear = () => {
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
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="primary" onClick={this.openModal}>
            Clear Data
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Clear Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to clear the currently displayed data?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeAndClear}>
              Clear
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ClearButton;
