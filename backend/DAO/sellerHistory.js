var db = require("../utils/connection");

exports.getHistory = async (req) => {
  return db.query(
    "with details AS (select book_id,book_details.isbn,price,course,buyer_email,book_name,author from book_exchange.Sold_out_books INNER JOIN book_exchange.book_details ON Sold_out_books.isbn=book_details.isbn where seller_email = $1) select book_id,isbn,price,course,buyer_email,book_name,author,name as buyer_name,mobile from details INNER JOIN book_exchange.users ON details.buyer_email=users.email ",
    [req.session.user.email]
  );
};
