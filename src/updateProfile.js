import React, { useState ,useContext, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyProfile.css";
import Navbar from "./NavBar";
import { NavLink } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import {AuthContext} from './App';
import updateprofile from "../src/service/auth/updateprofile";
import getUser from "../src/service/auth/getUser";



const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    //maxWidth: "500px"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  form: {
    fontfamily: "Georgia",
    padding: "20px",
    width: "100%",
    maxWidth: "500px",
    background: "#000"
  },
  area: {
    width: "100%",
    background: "rgba(255,255,255,.1)",
    border: "none",
    borderRadius: "4px",
    fontSize: "15px",
    outline: "0",
    padding: "10px",
    margin: "1em auto",
    boxSizing: "border-box",
    backgroundColor: "#e8eeef",
    color: "#8a97a0"
  },
  submit: {
    color: "#FFF",
    margin: "1em auto",
    background: "#1abc9c",
    fontSize: "18px",
    textAlign: "center",
    fontStyle: "normal",
    width: "100%",
    border: "1px solid #16a085",
    borderWidth: "1px 1px 3px",
    marginBottom: "10px",
    padding: "15px"
  }
}));

export default function updateProfile({setOpen}) {

  const { user,setUser } = useContext(AuthContext);
  const [ID,setID]=useState("");
  const [mobile,setMobile]=useState("");
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  
  const onSubmit = async (data) => {
    const res = await updateprofile({email: user.email,student_id: data.ID,mobile: data.mobile});
    if(!res.success) alert(res.message);
    else
    {
      const response=await getUser();
      //console.log();
      setUser(response);
      setOpen(false);
    }
  };

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

  return (
    <div className="pop-up">
          <Modal
            className={classes.modal}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
              <input
                {...register("ID")}
                type="text"
                defaultValue={ID}
                className={classes.area}
                name="ID"
                placeholder="Student ID"
                required={true}
              />
              <input
              {...register("mobile")}
              type="text"
              defaultValue={mobile}
              className={classes.area}
              name="mobile"
              placeholder="Enter Mobile of length 10"
              required={true}
            />
              <input className={classes.submit} type="submit" value="Submit" />
            </form>
          </Modal>
        </div>
  );
}
