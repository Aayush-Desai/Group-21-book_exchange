const router = require("express").Router();
const seller = require("../service/seller");


// Add a book for sale
router.post("/sellbook", seller.SellBook);

// Delete from sale
router.post("/deletebook", seller.DeleteBook);

// Book sold, remove it
router.post("/deembook", seller.DeemBook);

// Get currently uploaded books for sale
router.get("/getbooksforsale", seller.GetBooksForSale);

// Get all requests of a book
router.get("/getrequests",seller.GetRequests);


module.exports = router
