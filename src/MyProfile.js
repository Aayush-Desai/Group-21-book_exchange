import React, { useState ,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProfile.css";
import Navbar from "./NavBar";
import Home from "./Home";
import WishList from "./WishList";
import { NavLink } from "react-router-dom";
import {AuthContext} from './App';
import logout from "../src/service/auth/logout";

export default function MyProfile() {

  const { setVar,user,setUser } = useContext(AuthContext);

  const style = {
    margin: "20px auto",
    color: "grey"
  };
  const style1 = {
    marginBottom: "50px"
  };
  const onClickHandler= async () =>{
    const data=await logout();
    if(data.success) setVar(false);
    else alert(data.message);
  }
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
              <div className="">
                <div className="mainbar__container">
                  <h3 style={style1}>My Profile</h3>

                  <div style={{ marginRight: "50px" }}>
                    <p>Name : {user.name}</p>
                    <hr />
                    <p>Email : {user.email}</p>
                    <hr />
                    <p>Student ID : {user.student_id}</p>
                    <hr />
                    <p>Mobile No. : {user.mobile}</p>
                    <hr />

                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
              <button className="button" onClick={onClickHandler}> Logout </button>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}
