var db = require("../utils/connection");

exports.getHistory = async (req) => {
  return db.query(
    "select book_id,ISBN,price,course,buyer_email from book_exchange.Sold_out_books where seller_email = $1",
    [req.session.email]
  );
};
