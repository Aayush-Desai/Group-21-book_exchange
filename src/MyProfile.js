import React, { useState ,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProfile.css";
import Navbar from "./NavBar";
import Home from "./Home";
import WishList from "./WishList";
import { NavLink } from "react-router-dom";
import {AuthContext} from './App';
import logout from "../src/service/auth/logout";
import  Updateprofile  from "./updateProfile";

export default function MyProfile() {

  const { setVar,user,setUser } = useContext(AuthContext);
  const [addBook,setAddBook]=useState(false);

  const style = {
    margin: "20px auto",
    color: "grey"
  };
  const style1 = {
    marginBottom: "50px"
  };
  const onClickLogoutHandler= async () =>{
    const data=await logout();
    if(data.success) setVar(false);
    else alert(data.message);
  }

  const onClickUpdateHandler = () =>{
    setAddBook(true);
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
            {addBook?(
              <Updateprofile setAddBook={setAddBook} />
            ):(
              <div></div>
            )}
            <div>
            
            <div className="mainbar__container">
                  <h3 style={style1}>My Profile</h3>

                  <div className="row1">
                  <label
                    className="col-3 col-sm-3 col-md-3 col-lg-3 Label"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <div
                    className="col-9 col-sm-9 col-md-9 col-lg-9 Input-value"
                  >{user.name}</div>
                </div>

                <div className="row1">
                  <label
                    className="col-3 col-sm-3 col-md-3 col-lg-3 Label"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <div
                    className="col-9 col-sm-9 col-md-9 col-lg-9 Input-value"
                  >{user.email}</div>
                </div>

                  <div className="row1">
                  <label
                    className="col-3 col-sm-3 col-md-3 col-lg-3 Label"
                    htmlFor="student_id"
                  >
                    Student ID:
                  </label>
                  <div
                    className="col-9 col-sm-9 col-md-9 col-lg-9 Input-value"
                  >{user.student_id}</div>
                </div>
                <div className="row1">
                    <label
                    className="col-3 col-sm-3 col-md-3 col-lg-3 Label"
                    htmlFor="mobile"
                  >
                    Mobile:
                  </label>
                  <div
                    className="col-9 col-sm-9 col-md-9 col-lg-9 Input-value"                    
                  >{user.mobile}</div>
              </div>


                <div style={{display:"flex",justifyContent:"center",height:"60px"}}>
                <button className="button" onClick={onClickUpdateHandler}> Update Profile </button>
                  <button className="button" onClick={onClickLogoutHandler}> Logout </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
