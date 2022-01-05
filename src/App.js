import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Emg from "./pages/Emg";
import Gyro from "./pages/Gyro";
import PressurePlate from "./pages/Pressure-plate";
import DataHistory from "./pages/Data-history";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Overview />}></Route>
            <Route exact path="/emg" element={<Emg />}></Route>
            <Route exact path="/gyro" element={<Gyro />}></Route>
            <Route
              exact
              path="/pressure-plate"
              element={<PressurePlate />}
            ></Route>
            <Route exact path="/data-history" element={<DataHistory />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
