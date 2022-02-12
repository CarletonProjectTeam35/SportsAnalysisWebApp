import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ClearButton extends Component {
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    closeAndClear = () => {
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
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <>
                <div
                    className="d-flex align-items-center justify-content-center"
                >
                    <Button variant="primary" onClick={this.openModal}>
                        Clear Data
                    </Button>
                </div>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Clear Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to clear the currently displayed data?</Modal.Body>
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