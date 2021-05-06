
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
    "with details AS (SELECT AVAILABLE_BOOKS.book_id,AVAILABLE_BOOKS.email as seller_email,ISBN,course,price,status FROM book_exchange.AVAILABLE_BOOKS INNER JOIN book_exchange.HISTORY ON AVAILABLE_BOOKS.book_id = HISTORY.book_id WHERE HISTORY.email=$1 UNION SELECT HISTORY.book_id,seller_email as seller_email,ISBN,course,price,status FROM book_exchange.Sold_out_books INNER JOIN book_exchange.HISTORY ON Sold_out_books.book_id = HISTORY.book_id WHERE buyer_email=$2), middle AS (select book_id,seller_email,details.isbn,course,price,status,book_name,author from details INNER JOIN book_exchange.book_details ON details.isbn=book_details.isbn) select book_id,seller_email,isbn,course,price,status,book_name,author,name as seller_name,mobile from middle inner join book_exchange.users on middle.seller_email=users.email",
    [req.query.email,req.query.email]
    );
};
