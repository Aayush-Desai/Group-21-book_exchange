// Required Modules
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwtt = require("jsonwebtoken");
//const cookie = require("cookie-parser");
//const session = require('express-session');


// Utilities
const promise = require("../utils/promise");
const myCache = require("../utils/nodecache");

// Database
const authDAO = require("../DAO/auth");

// Configuration
const expire = require("../config/tokensexpire");

exports.signup = async (req, res) => {
  console.log("Hello from SignUp");
  if (!req.body.email || !req.body.password || !req.body.name) {
    return res.json({ success: false, err_code: 403, message: "All Fields Required!"});
  }

  var [err, result] = await promise(authDAO.getUserByEmail(req));
  
  if (err) return res.json({ success: false, err_code: err.code, message: err});
  //console.log(result.rows[0]);
  if (result.rows.length > 0) { 
    return res.json({ success: false, err_code: 401, message: "User Already Exists!"});
  }
  //console.log("Hello from SignUp");
  // if (req.body.password !== req.body.conpassword)
  //   return res.sendError(null, 403, "Passwords do not match!");

  if (req.body.password.length < 6)
    return res.json({ success: false, err_code: 403, message: "Password too short!" });;

  var [err1, hashedpw] = await promise(bcrypt.hash(req.body.password, 12));

  if (err1) return res.json({ success: false, err_code: err1.code, message: err1 });
  //req.body.password = hashedpw;
  var [err2, result1] = await promise(authDAO.addUser(req));
  //console.log(err2);
  if (err2) return res.json({ success: false, err_code: err2.code, message: err2 });
  
  
  return res.json({ success: true,message: "Signed Up Successfully"});
};

exports.signin = async (req, res) => {
  console.log(req.sessionID);
  console.log("reached here");
  if (!req.body.email || !req.body.password)
    return res.json({ success: false, err_code: 403, message: "All fields required!" });
    
  var [err, result] = await promise(authDAO.getUserByEmail(req));
  //console.log(err);
  if (err) return res.json({ success: false, err_code: err.code, message: err });
  //console.log(result);
  
  if (result.rows.length === 0)
    return res.json({ success: false, err_code: 402, message: "User does not exist!" });

  
  
  if (req.body.password!==result.rows[0].password) return res.json({ success: false, err_code: 401, message: "Email or Password Incorrect!" });

  var user = result.rows[0];
  delete user.password;

  // var token = jwtt.sign(
  //   {
  //     email: user.email
  //   },
  //   process.env.COOKIE_TOKEN,
  //   { expiresIn: expire.cookieExpire }
  // );
  // var success = await myCache.set(
  //   token,
  //   JSON.stringify(user),
  //   expire.cookieExpire
  // );
  
  // if (!success) return res.json({ success: false, err_code: 403, message: "Internal Server Error" });

  // res.cookie("jwt", token);
  //console.log(req.token);
  req.session.loggedin = true;
	req.session.user = user;
  //console.log(req.session.user.email);
  return res.json({ success: true,token: process.env.COOKIE_TOKEN,message: "Successfully logged In"});
};

exports.logout = async (req, res) => {
  if (!req.session.loggedin) return res.json({ success: false, err_code: 403, message: "Invalid URL" });
  req.session.loggedin=false;
  req.session.user = null;
  req.sessionID = null;
  return res.json({ success: true,message: "Logged Out Successfully!"});
};

exports.getprofile = async (req, res) => {
  var [err, result] = await promise(authDAO.getprofile(req));
  //console.log(req.user);
  if (err) return res.json({ success: false, err_code: err.code, message: err });
  var user = result.rows[0];
  delete user.password;
  return res.send(user);
};

exports.updateprofile = async (req, res) => {
  if (!req.body.mobile || !req.body.student_id) {
    return res.json({ success: false, err_code: 403, message: "All fields Required!" });

  }
  if (req.body.mobile.length!==10 || isNaN(req.body.mobile) || isNaN(req.body.student_id)) {
    return res.json({ success: false, err_code: 403, message: "Enter valid mobile or ID" });

  }

  var [err, result] = await promise(authDAO.updateprofile(req));

  if (err) return res.json({ success: false, err_code: err.code, message: "Internal server Error" });
  
  var [err1, result1] = await promise(authDAO.getUserByEmail(req));
  
  if(!err1) 
  {
    var user=result1.rows[0];
    delete user.password;
    delete user.verification;
    req.session.user=user;
  }

  return res.json({ success: true,message: "Profile updated Succesfully"});
};
