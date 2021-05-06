import React from "react";
import "./Navbar.css";
import AbtUs from "./AboutUs";
import ContUs from "./ContactUs";

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
          <a href="./AbtUs">
            {" "}
            <button className="navbutton">About Us</button>
          </a>
          <a href="./ContUs">
            <button className="navbutton">Contact Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
