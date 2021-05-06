var db = require("../utils/connection");
//const session = require('express-session');


exports.getUserByEmail = async (req) => {
  //console.log("from Database");
  return db.query("select * from book_exchange.USERS where email = $1 ", [req.body.email]);
};

exports.addUser = async (req) => {
  return db.query(
    "insert into book_exchange.USERS (email, password, name, student_id, mobile, verification) values ($1,$2,$3,$4,$5,$6)",
    [
      req.body.email,
      req.body.password,
      req.body.name,
      null,
      null,
      true
    ]
  );
};

exports.updateprofile = async (req) => {
  return db.query("UPDATE book_exchange.USERS SET mobile = $1, student_id = $2 WHERE email=$3", [
    Number(req.body.mobile),
    req.body.student_id,
    req.session.user.email
  ]);
};

exports.getprofile = async (req) => {
  return db.query("select * from book_exchange.USERS where email = $1 ", [req.session.user.email]);
};