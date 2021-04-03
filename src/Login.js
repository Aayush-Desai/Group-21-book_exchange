import React, { useState } from "react";
import PropTypes from "prop-types";
import fetchData from "./fetchData";
import "./LoginRegister.css";
import Reg from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import titleimage from "./main__page__image@2x.png";
import loginUser from "../src/service/auth/signin";
import { Redirect } from "react-router";
// ----------------------------------------------------

// ----------------------------------------------------

export default function Login({ setToken }) {
  // --------------------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSet, setVar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if(tok) localStorage.clear();
    const token = await loginUser({
      email,
      password
    });
    if (token.success) {
      console.log(token);
      setToken(token);
      setVar(true);
    } else alert(token.err_code);
  };

  // ---------------------------------------

  return (
    <React.Fragment>
      {!isSet ? (
        <div>
          <Navbar />
          <div className="login__container container-fluid row">
            <div className="leftside col-lg-6">
              <div className="class1">
                <div className="">
                  <img
                    alt="titleImage"
                    src={titleimage}
                    className="title__image"
                  ></img>
                </div>

                <div>
                  <p className="login__text">
                    We hope you find something good to read.{" "}
                    <span className="blue__text"> Go Aces! </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rightside col-lg-6">
              <div className="login__box">
                {/* ------------------------------------------------ */}
                <form className="a__form" onSubmit={handleSubmit}>
                  <h3>Log in</h3>

                  <div className="form-group">
                    <label className="spacing__text">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="spacing__text">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit "
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Sign in
                  </button>
                  <p className="forgot-password text-right spacing__text">
                    <a href="/Reg">Register</a>
                  </p>
                </form>
                {/* -------------------------------------------------------- */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/Home" />
      )}
    </React.Fragment>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
