import "./App.css";
import React from "react";
import NavbarCustom from "./components/Navbar/NavbarCustom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Emg from "./pages/Emg";
import Gyro from "./pages/Gyro";
import DataAnalysis from "./pages/Data-analysis";
import PressurePlate from "./pages/Pressure-plate";
import DataHistory from "./pages/Data-history";
import SingleDataHistory from "./pages/SingleDataHistory";
import Signin from "./components/Login/Login";
import { useUserContext } from "./context/userContext";

function App() {
  const { user, loading, error } = useUserContext();
  return (
    <>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {" "}
          {user ? (
            <Router>
              <div className="App">
                <NavbarCustom />
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
                    <Route
                      exact
                      path="/data-history"
                      element={<DataHistory />}
                    ></Route>
                    <Route
                      exact
                      path="/data-history/:dataId"
                      element={<SingleDataHistory />}
                    ></Route>
                    <Route
                      exact
                      path="/data-analysis"
                      element={<DataAnalysis />}
                    ></Route>
                  </Routes>
                </div>
              </div>
            </Router>
          ) : (
            <Signin />
          )}{" "}
        </>
      )}
    </>
  );
}

export default App;
