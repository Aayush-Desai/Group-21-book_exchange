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
  return db.query("SELECT TOP 10 * FROM book_exchange.AVAILABLE_BOOKS");
}


// Search Book 
exports.SearchBook = async (req) => {
  return db.query("select * from book_exchange.book_details where book_name like ($1)",[req.body.book_name+'%']);
}

