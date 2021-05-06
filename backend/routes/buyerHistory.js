
const router = require("express").Router();
const buyerHistory = require("../service/buyerHistory");
const verify = require("../service/verify");

// Delete request from history.
router.post("/deleteRequest",verify.verify, buyerHistory.deleteRequest);

// Getting buyerHistory.
router.get("/GetbuyerHistory",verify.verify, buyerHistory.GetbuyerHistory);

module.exports = router;
