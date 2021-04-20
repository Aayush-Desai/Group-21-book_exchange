
const router = require("express").Router();
const wishlist = require("../service/wishlist");

// Remove from wishlist
router.post("/removeFromwishlist", wishlist.removeFromwishlist);

// Get books from wishlist
router.get("/GetFromwishlist", wishlist.GetFromwishlist);

module.exports = router;
