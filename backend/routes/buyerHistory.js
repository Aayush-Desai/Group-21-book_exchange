
const router = require("express").Router();
const buyerHistory = require("../service/buyerHistory");

// Delete request from history.
router.post("/deleteRequest", buyerHistory.deleteRequest);

// Getting buyerHistory.
router.get("/GetbuyerHistory", buyerHistory.GetbuyerHistory);

module.exports = router;
