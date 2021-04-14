
var db = require("../utils/connection");
//var jwt = require("jwt-simple");
require("dotenv").config();

// delete request.
exports.deleteRequest = async (req) => {
  return db.query(
  "DELETE FROM book_exchange.HISTORY WHERE book_id=$1 AND EMAIL=$2 ",
  [req.body.book_id,req.body.email]
  );
};

// Get books from wishlist
exports.GetbuyerHistory = async (req) => {
    return db.query(
    "SELECT AVAILABLE_BOOKS.book_id,AVAILABLE_BOOKS.email,ISBN,course,price,STATUS FROM book_exchange.AVAILABLE_BOOKS INNER JOIN book_exchange.HISTORY ON AVAILABLE_BOOKS.book_id = HISTORY.book_id WHERE AVAILABLE_BOOKS.email=$1 UNION SELECT book_id,seller_email,ISBN,course,price FROM book_exchange.Sold_out_books WHERE buyer_email=$2 ",
    [req.query.email,req.query.email]
    );
};
