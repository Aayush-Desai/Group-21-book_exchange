
var db = require("../utils/connection");
//var jwt = require("jwt-simple");
require("dotenv").config();

// Remove from wishlist
exports.removeFromwishlist = async (req) => {
  //console.log(req.session.user.email);
  return db.query(
  "DELETE FROM book_exchange.WISHLIST WHERE book_id= $1 AND EMAIL= $2",
  [req.body.book_id,req.session.user.email]
  );
};

// Get books from wishlist
exports.GetFromwishlist = async (req) => {
  //console.log(req.session.user.email);
 return db.query(
   "WITH AVAILABLEWISH AS ( SELECT book_exchange.AVAILABLE_BOOKS.book_id AS book_id,book_exchange.AVAILABLE_BOOKS.email as email,isbn,course,price FROM book_exchange.AVAILABLE_BOOKS INNER JOIN book_exchange.WISHLIST ON book_exchange.AVAILABLE_BOOKS.book_id=book_exchange.WISHLIST.book_id WHERE book_exchange.WISHLIST.EMAIL= $1) SELECT book_id,email,AVAILABLEWISH.isbn,course,price,author,book_name FROM AVAILABLEWISH INNER JOIN book_exchange.BOOK_DETAILS ON book_exchange.BOOK_DETAILS.isbn=AVAILABLEWISH.isbn",
   [req.session.user.email]
  );
};
