
const router = require("express").Router();
const wishlist = require("../service/wishlist");
const verify = require("../service/verify");

// Remove from wishlist
router.post("/removeFromwishlist",verify.verify, wishlist.removeFromwishlist);

// Get books from wishlist
router.get("/GetFromwishlist",verify.verify, wishlist.GetFromwishlist);

module.exports = router;
