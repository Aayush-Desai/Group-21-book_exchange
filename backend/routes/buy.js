const router = require("express").Router();
const buy = require("../service/buy");
const verify = require("../service/verify");


// Buy Book
router.post("/buybook",verify.verify, buy.BuyBook);

// Add book  to wishlist
router.post("/addtowishlist",verify.verify, buy.AddToWishList);

// Display Top 10 books
router.get("/getavailablebook",verify.verify, buy.GetAvailableBook);

// Search Book 
router.get("/searchbook",verify.verify, buy.SearchBook);


module.exports = router

// - Search(filters)
// - BuyABook
// - AddtoWishlist
// - GetAvailableBooks