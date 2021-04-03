
// Required Modules
require("dotenv").config();
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwtt = require("jsonwebtoken");

// Utilities
const promise = require("../utils/promise");
const myCache = require("../utils/nodecache");

// Database
const buyerHistoryDAO = require("../DAO/buyerHistory");

// Configuration
const expire = require("../config/tokensexpire");

// delete a request from history
exports.deleteRequest = async (req, res) => {
    var [err, result] = await promise(buyerHistoryDAO.deleteRequest(req));

    if (err) return res.json({ success: false, err_code: 500 , message: "Error."});
    return res.json({ success: true,message: "Request deleted.!"});

  };

// Getting buyerHistory
exports.GetbuyerHistory = async (req,res) => {
  var [err, result] = await promise(authDAO.GetbuyerHistory(req));

  if (err) return res.json({ success: false, err_code: 500 , message: "Error."});
  return res.send(result.rows);

};
