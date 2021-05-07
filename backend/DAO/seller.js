var db = require("../utils/connection");
// var jwt = require("jwt-simple");
require("dotenv").config();


// Upload a book for sale and add it in book_details table if not already
exports.SellBook = async (req) => {

  db.query("INSERT INTO book_exchange.book_details(ISBN,book_name,author) VALUES ($1, $2, $3) ON CONFLICT (ISBN) DO NOTHING;",
  [req.body.isbn, req.body.book_name, req.body.author], function(err,result){
    if(err) throw err;
    console.log("Inserted data in Books_details");
  });

  return db.query("INSERT INTO book_exchange.AVAILABLE_BOOKS(EMAIL,ISBN,COURSE,PRICE) VALUES($1, $2, $3, $4);", [
    req.body.email, req.body.isbn, req.body.course, Number(req.body.price)]);
}


// Delete from available_books **and update status  in history table
exports.DeleteBook = async (req) => {
  db.query("UPDATE book_exchange.HISTORY SET status = 0 where book_id= $1;", [req.body.book_id],function(err,result){
    if(err) throw err;
    console.log("History table updated!");
  });

  return db.query("delete from book_exchange.available_books where book_id=$1;", [
    req.body.book_id]);
};


// Remove from available_books and add it to Sold_out_books with buyer email and time stamp aslo update status (0 means sold, 1 means bought) in history table
exports.DeemBook = async (req) => {
   db.query("UPDATE book_exchange.HISTORY SET status = 1 WHEN email=$1 ELSE 0 where book_id=$2;", [req.body.buyer_email, req.body.book_id],function(err,result){
     if(err) throw err;
     console.log("History table updated!");
   });

  db.query("Insert into book_exchange.Sold_out_books(book_id,isbn,price,course,buyer_email,seller_email,time_stamp) VALUES($1,$2,$3,$4,$5,$6,CURRENT_TIMESTAMP);"[req.body.book_id, req.body.isbn, Number(req.body.price),req.body.course, req.body.buyer_email, req.body.seller_email], function(err,result){
    if(err) throw err;
    console.log("Data inserted into Sold_out_books.");
  });

  return db.query("delete from book_exchange.available_books where book_id=$1;", [
    req.body.book_id]);
}


// Get the list of books which are currently for sale
exports.GetBooksForSale = async (req) => {
  return db.query("select book_id,Book_name,author,price,book_details.isbn from book_exchange.available_books,book_exchange.book_details where available_books.email = $1 and available_books.isbn = book_details.isbn", [
    req.session.user.email]);
}


// Get all buy requests of a particular book
exports.GetRequests = async (req) => {
  return db.query("select users.name, users.student_id, users.mobile,users.email from book_exchange.users,book_exchange.history where history.email=users.email and history.book_id=$1",[
    Number(req.query.book_id)]);
}
