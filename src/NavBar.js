import React from "react";
import "./Navbar.css";
import AbtUs from "./AboutUs";
import ContUs from "./ContactUs";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
      <div className="header__logo">
        <h3>
          BOOK<span className="bluefont">EX.</span>
        </h3>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <NavLink to="./AbtUs">
            {" "}
            <button className="navbutton">About Us</button>
          </NavLink>
          <NavLink to="./ContUs">
            <button className="navbutton">Contact Us</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
