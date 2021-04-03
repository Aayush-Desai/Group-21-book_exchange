
var db = require("../utils/connection");
var jwt = require("jwt-simple");
require("dotenv").config();

// Remove from wishlist
exports.removeFromwishlist = async (req) => {
  return db.query(
  "DELETE FROM book_exchange.WISHLIST WHERE book_id= $1 AND EMAIL= $2 ",
  [req.body.book_id,req.body.email]
  );
};

// Get books from wishlist
exports.GetFromwishlist = async (req) => {
 return db.query(
   "SELECT AVAILABLE_BOOKS.book_id,AVAILABLE_BOOKS.email,ISBN,course,price FROM book_exchange.AVAILABLE_BOOKS INNER JOIN book_exchange.WISHLIST ON AVAILABLE_BOOKS.book_id = WISHLIST.book_id WHERE EMAIL= $1 ",
   [req.body.email]
  );
};
