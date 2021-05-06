const router = require("express").Router();
const seller = require("../service/seller");
const verify = require("../service/verify");

// Add a book for sale
router.post("/sellbook",verify.verify, seller.SellBook);

// Delete from sale
router.post("/deletebook",verify.verify, seller.DeleteBook);

// Book sold, remove it
router.post("/deembook",verify.verify, seller.DeemBook);

// Get currently uploaded books for sale
router.get("/getbooksforsale",verify.verify, seller.GetBooksForSale);

// Get all requests of a book
router.get("/getrequests",verify.verify,seller.GetRequests);


module.exports = router
