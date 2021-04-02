var db = require("../utils/connection");

exports.getUserByEmail = async (req) => {
  console.log("from Database");
  return db.query("select * from book_exchange.USERS where email = $1 ", [req.body.email]);
};

exports.addUser = async (req) => {
  return db.query(
    "insert into book_exchange.USERS (email, password, name, student_id, mobile, verified) values ($1,$2,$3,$4,$5,$6)",
    [
      req.body.email,
      req.body.password,
      req.body.name,
      req.body.student_id,
      req.body.mobile,
      true
    ]
  );
};

