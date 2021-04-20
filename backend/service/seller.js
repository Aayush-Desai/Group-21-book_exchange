// Required Modules
require("dotenv").config();
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwtt = require("jsonwebtoken");

// Utilities
const promise = require("../utils/promise");
const myCache = require("../utils/nodecache");

// Database
const sellDAO = require("../DAO/seller");

// Configuration
const expire = require("../config/tokensexpire");


// Upload a book for sale
exports.SellBook = async (req,res) => {
  var [err, result] = await promise(sellDAO.SellBook(req));

  if(err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

  return res.json({ success: true,message: "Your book is uploaded successfully!"});
}

// Delete a book from sale
exports.DeleteBook = async (req, res) => {
    var [err, result] = await promise(sellDAO.DeleteBook(req));

    if (err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

    return res.json({ success: true,message: "Book deleted from sale successfully!"});
  }


// Deem a sold book from available books database
exports.DeemBook = async (req,res) => {
    var [err, result] = await promise(sellDAO.DeemBook(req));

    if (err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

    return res.json({ success: true,message: "Your book is deemed from availabe books!"});
  }

// Get the list of books which are currently for sale
exports.GetBooksForSale = async (req,res) => {
    var [err,result] = await promise(sellDAO.GetBooksForSale(req));

    if (err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

    return res.send(result.rows);
}

// Get Buy Requests of the book
exports.GetRequests = async (req,res) => {
  var [err,result] = await promise(sellDAO.GetRequests(req));
  
  if(err) return res.json({ success: false, err_code: 500, message: "Internal Server Error. Please try again."});

    return res.send(result.rows);
}

