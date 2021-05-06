import React, { useState ,useContext, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProfile.css";
import Navbar from "./NavBar";
import { NavLink } from "react-router-dom";
import {AuthContext} from './App';
import updateprofile from "../src/service/auth/updateprofile";
import getUser from "../src/service/auth/getUser";

export default function updateProfile({setAddBook}) {

  const { user,setUser } = useContext(AuthContext);
  const [ID,setID]=useState("");
  const [mobile,setMobile]=useState("");

  useEffect(() =>{
    setMobile(user.mobile);
    setID(user.student_id);
    console.log(ID);
  },[]);

  const style = {
    margin: "20px auto",
    color: "grey"
  };
  const style1 = {
    marginBottom: "50px"
  };
  const onClickHandler= async () =>{
    const data = await updateprofile({email: user.email,student_id: ID,mobile: mobile});
    if(!data.success) alert(data.message);
    else
    {
      const response=await getUser();
      //console.log();
      setUser(response);
      setAddBook(false);
    }
    
  }
  return (
    <div className="popup-box">
    <div className="box">
      <h3 style={{margin:"20px",display:"flex",justifyContent:"center"}}>Update Profile</h3>
      <div style={{marginBottom:"20px"}} className="row1">
              <label
                className="col-3 col-sm-3 col-md-3 col-lg-3 Label"
                htmlFor="student_id"
              >
                Student ID:
              </label>
              <input
                type="text"
                name="student_id"
                id="student_id"
                value={ID}
                placeholder="Enter Student ID"
                className="col-9 col-sm-9 col-md-9 col-lg-9 Input-value"
                onChange={(e) => setID(e.target.value)}
              />
            </div>
            <div className="row1">
                <label
                className="col-3 col-sm-3 col-md-3 col-lg-3 Label"
                htmlFor="mobile"
              >
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={mobile}
                placeholder="Enter 10 digit Number"
                className="col-9 col-sm-9 col-md-9 col-lg-9 Input-value"
                onChange={(e) => setMobile(e.target.value)}
              />
          </div>
      <div style={{marginTop:"40px",display:"flex",justifyContent:"center",height:"60px"}}>
      <button className="button" onClick={onClickHandler}> Save </button>
        <button className="button" onClick={()=>setAddBook(false)}> Cancel </button>
      </div>
    </div>
  </div>
  );
}
