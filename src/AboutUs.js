import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import { FaArrowCircleLeft } from 'react-icons/fa';
import Navbar from "./NavBar";
import { NavLink } from "react-router-dom";

import image2 from "./image_abt_us@2x.png";
//import image1 from "./pattern.png";

export default function AboutUs() {
  return (
    <div className="main__container">
      <Navbar />
    
      <NavLink to="/">
        <FaArrowCircleLeft style={{fontSize:"40px",margin:"15px"}}/>
      </NavLink>
    
      <div className="inner__container">
        <div className="inner__para">
          <h1>About Us</h1>
          <h5>
            There is nothing much to know about us. but since you have really
            took an effort to click on the button, let me tell you something.
            <strong> we are the one! </strong> <br />
            we are group of individuals who has worked very hard to make
            difference without caring the people’s response. There nothing in
            this project that you really hate so We really expect you towards
            your positive response.{" "}
          </h5>
        </div>

        <div className="side__images">
          <img src={image2} alt="gathering" className="image1"></img>
        </div>
      </div>
    </div>
  );
}
