var db = require("../utils/connection");
//var jwt = require("jwt-simple");
require("dotenv").config();


// Buy Book
exports.BuyBook = async (req) => {
  return db.query("INSERT INTO book_exchange.History(EMAIL,book_id, status) VALUES($1, $2, $3)", [
    req.body.email, req.body.book_id,2]);
}


// Add book  to wishlist
exports.AddToWishList = async (req) => {
  return db.query("INSERT INTO book_exchange.WISHLIST(EMAIL,book_id) VALUES($1, $2)", [
    req.body.email, req.body.book_id]);
};

// Display Top 10 books
exports.GetAvailableBook = async (req) => {
  return db.query("SELECT book_id,email,AVAILABLE_BOOKS.isbn,course,price,book_name,author FROM book_exchange.AVAILABLE_BOOKS NATURAL JOIN book_exchange.book_details LIMIT 10");
}


// Search Book 
exports.SearchBook = async (req) => {
  var qur="SELECT book_id,email,AVAILABLE_BOOKS.isbn,course,price,book_name,author FROM book_exchange.AVAILABLE_BOOKS NATURAL JOIN book_exchange.book_details where book_name like ";
  qur+="'";
  qur+= req.query.bookname;
  qur+="%";
  qur+="'";
  console.log(req.url);
  console.log(qur);
  return db.query(qur);
}

