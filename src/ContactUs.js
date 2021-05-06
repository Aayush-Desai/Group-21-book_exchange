import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUs.css";
import { FaArrowCircleLeft } from 'react-icons/fa';
import Navbar from "./NavBar";
import { NavLink } from "react-router-dom";

//import imgx from "./image__long__hair.png";

export default function AboutUs() {
  return (
    <div className="main__container">
      <Navbar />

      <div className="">
    
        <NavLink to="/">
          <FaArrowCircleLeft style={{fontSize:"40px",margin:"15px"}}/>
        </NavLink>
        
        <div className="inner__container1">
          <form className="a__form" action="/Home">
            <h2>Get In Touch</h2>

            <div className="form-group">
              <label className="spacing__text">Name</label>
              <input
                type="email"
                className="form-control"
                placeholder="Jane Doe"
              />
            </div>

            <div className="form-group">
              <label className="spacing__text">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Shoot!</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Don't blame us, we didn't do it!"
              ></textarea>
            </div>

            <button type="submit " className="btn btn-primary btn-lg btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
