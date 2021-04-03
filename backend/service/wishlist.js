
// Required Modules
require("dotenv").config();
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwtt = require("jsonwebtoken");

// Utilities
const promise = require("../utils/promise");
const myCache = require("../utils/nodecache");

// Database
const wishlistDAO = require("../DAO/wishlist");

// Configuration
const expire = require("../config/tokensexpire");

// Remove a book from wishlist
exports.removeFromwishlist = async (req, res) => {
    var [err, result] = await promise(wishlistDAO.removeFromwishlist(req));

    if (err) return res.json({ success: false, err_code: 500 , message: "Error."});
    return res.json({ success: true,message: "Book removed from wishlist!"});

  };

// Getting books from wishlist
exports.GetFromwishlist = async (req,res) => {
    var [err,result] = await promise(wishlistDAO.GetFromwishlist(req));

    //if(err) return res.sendError(err, err.code);
  if (err) return res.json({ success: false, err_code: 500 , message: "Error."});
  return res.send(result.rows);

};
