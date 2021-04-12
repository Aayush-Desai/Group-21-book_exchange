import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WishList.css";
import Navbar from "./NavBar";
import WishlistBox from "./WishlistBox";
import Home from "./Home";
import MyProf from "./MyProfile";
import { addtowishlist } from "./Home";
import { NavLink } from "react-router-dom";

export default function WishList() {
  console.log(addtowishlist);
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home__container">
            <div className="home__sidebar">
                <div className="button__container">
                <NavLink to="/Home" className="sidebar__button">
                    <button className="button__in">Dashboard</button>
                </NavLink>

                <NavLink to="/WishList" className="sidebar__button">
                    <button className="button__in">Wishlist</button>
                </NavLink>
                <NavLink to="/Home" className="sidebar__button">
                    <button className="button__in">History</button>
                </NavLink>
                <NavLink to="/Home" className="sidebar__button">
                    <button className="button__in">As Seller</button>
                </NavLink>
                <NavLink to="/MyProf" className="sidebar__button">
                    <button className="button__in">My Profile</button>
                </NavLink>
                </div>
            </div>
          <div className="home__mainbar">
            <div className="mainbar__container">
              <h1> Wishlist </h1>
              <WishlistBox
                title="Think Like a Monk"
                author="Jay shetty"
                price="70"
              />
              {/* ----------------------------------------------- */}
              {/* ----------------------------------------------- */}
              {/* ----------------------------------------------- */}
              {/* ----------------------------------------------- */}
              {/* ----------------WishList code------------------ */}
              {/* ----------------------------------------------- */}
              {/* ----------------------------------------------- */}
              {/* ----------------------------------------------- */}
              {/* ----------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
