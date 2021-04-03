// Required Modules
require("dotenv").config();
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwtt = require("jsonwebtoken");

// Utilities
const promise = require("../utils/promise");
const myCache = require("../utils/nodecache");

// Database
const buyDAO = require("../DAO/buy");

// Configuration
const expire = require("../config/tokensexpire");


// Buy Book
exports.BuyBook = async (req,res) => {
  var [err, result] = await promise(buyDAO.BuyBook(req));

  if (err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

  return res.json({ success: true,message: "Request Sent!"});
}

// Add book  to wishlist
exports.AddToWishList = async (req, res) => {
    var [err, result] = await promise(buyDAO.AddToWishList(req));

    if (err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

    return res.json({ success: true,message: "Book Added To Wishlist successfully"});

    
  }


// Display Top 10 books
exports.GetAvailableBook = async (req,res) => {
    var [err, result] = await promise(buyDAO.GetAvailableBook(req));

    if (err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

    return res.send(result.rows);
  }

// Search Book 
exports.SearchBook = async (req,res) => {
    var [err,result] = await promise(buyDAO.SearchBook(req));
    if (err) return res.json({ success: false, err_code: 500, message: "Book Not Available!"});

    return res.send(result.rows);
}