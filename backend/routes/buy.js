const router = require("express").Router();
const buy = require("../service/buy");


// Buy Book
router.post("/buybook", buy.BuyBook);

// Add book  to wishlist
router.post("/addtowishlist", buy.AddToWishList);

// Display Top 10 books
router.get("/getavailablebook", buy.GetAvailableBook);

// Search Book 
router.get("/searchbook", buy.SearchBook);


module.exports = router

// - Search(filters)
// - BuyABook
// - AddtoWishlist
// - GetAvailableBooks