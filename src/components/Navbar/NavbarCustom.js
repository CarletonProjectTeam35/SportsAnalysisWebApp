import React, { useState } from "react";
import { useUserContext } from "../../context/userContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap"

const NavbarCustom = () => {
  const [state, setState] = useState({ clicked: false });
  const { logoutUser } = useUserContext();

  const onClick = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      sessionStorage.clear();
      logoutUser();
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">The Puck Stats</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Overview</Nav.Link>
            <Nav.Link href="/emg">EMG</Nav.Link>
            <Nav.Link href="/gyro">Gyro</Nav.Link>
            <Nav.Link href="/pressure-plate">Pressure Plate</Nav.Link>
            <Nav.Link href="/data-history">Data History</Nav.Link>
            <Nav.Link href="/data-analysis">Data Analysis</Nav.Link>
            <Button variant="outline-light" style={{marginLeft:"1rem"}} onClick={onClick}>Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
