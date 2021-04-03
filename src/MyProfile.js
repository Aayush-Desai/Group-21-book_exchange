import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProfile.css";
import Navbar from "./Navbar";
import Home from "./Home";
import WishList from "./WishList";

export default function MyProfile() {
  const style = {
    margin: "20px auto",
    color: "grey"
  };
  const style1 = {
    marginBottom: "50px"
  };
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home__container">
          <div className="home__sidebar">
            <div className="button__container">
              <a className="sidebar__button" href="./Home">
                <button className="button__in">Dashboard</button>
              </a>
              <a className="sidebar__button" href="./WishList">
                <button className="button__in">Wishlist</button>
              </a>
              <a className="sidebar__button" href="./Home">
                <button className="button__in">History</button>
              </a>
              <a className="sidebar__button" href="./Home">
                <button className="button__in">As Seller</button>
              </a>
              <a className="sidebar__button" href="./MyProf">
                <button className="button__in">My Profile</button>
              </a>
            </div>
          </div>

          <div className="home__mainbar">
            <div className="mainbar__container">
              <div className="">
                <div className="mainbar__container">
                  <h3 style={style1}>My Profile</h3>

                  <div style={{ marginRight: "50px" }}>
                    <p>Name : xyz</p>
                    <hr />
                    <p>Email : xyz@daict.ac.in</p>
                    <hr />
                    <p>Student ID : xyz</p>
                    <hr />
                    <p>Mobile No. : +91 9999999999</p>
                    <hr />

                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
