import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { useUserContext } from "../../context/userContext";

const Navbar = () => {
  const [state, setState] = useState({ clicked: false });
  const { logoutUser } = useUserContext();

  const onClick = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      sessionStorage.clear();
      logoutUser();
    }
  };
  return (
    <nav className="NavbarItems">
      <h1 style={{ color: "white", paddingLeft: 10 }}> The Puck Stats </h1>
      <div
        className="menu-icon"
        onClick={() => setState({ clicked: !state.clicked })}
      >
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <>
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            </>
          );
        })}
        <li>
          <a className={"nav-links login-button"} href="#" onClick={onClick}>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
