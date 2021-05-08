var db = require("../utils/connection");
//var jwt = require("jwt-simple");
require("dotenv").config();


// Buy Book
exports.BuyBook = async (req) => {
  return db.query("INSERT INTO book_exchange.History(EMAIL,book_id, status) VALUES($1, $2, $3)", [
    req.body.email, Number(req.body.book_id),2]);
}

exports.GetRequest = async (req) => {
  return db.query("SELECT * FROM book_exchange.History WHERE email=$1 AND book_id=$2", [
    req.body.email, Number(req.body.book_id)]);
}

exports.CheckWishlistRequest = async (req) => {
  //console.log(req.session.user.email);
  return db.query(
    "SELECT * FROM book_exchange.WISHLIST WHERE email=$1 AND book_id=$2",
  [req.session.user.email,Number(req.body.book_id)]
  );
};

// Add book  to wishlist
exports.AddToWishList = async (req) => {
  return db.query("INSERT INTO book_exchange.WISHLIST(EMAIL,book_id) VALUES($1, $2)", [
    req.body.email, req.body.book_id]);
};

// Display Top 10 books
exports.GetAvailableBook = async (req) => {
  return db.query("with tempdetail as(SELECT book_id,email,AVAILABLE_BOOKS.isbn,course,price,book_name,author FROM book_exchange.AVAILABLE_BOOKS NATURAL JOIN book_exchange.book_details LIMIT 10) select book_id,tempdetail.email,isbn,course,price,book_name,author,name,mobile from tempdetail inner join book_exchange.users on users.email=tempdetail.email");
}


// Search Book 
exports.SearchBook = async (req) => {
  var qur="SELECT book_id,email,AVAILABLE_BOOKS.isbn,course,price,book_name,author FROM book_exchange.AVAILABLE_BOOKS NATURAL JOIN book_exchange.book_details where book_name like ";
  qur+="'";
  qur+= req.query.bookname;
  qur+="%";
  qur+="'";
  var qur1="with tempdetail as (" + qur + ") select book_id,tempdetail.email,isbn,course,price,book_name,author,name,mobile from tempdetail inner join book_exchange.users on tempdetail.email=users.email";
  return db.query(qur1);
}

