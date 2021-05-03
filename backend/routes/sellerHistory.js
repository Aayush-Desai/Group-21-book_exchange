const router = require("express").Router();
const sellerHistory = require("../service/sellerHistory");
const verify = require("../service/verify");
//const verify = require("../service/verifyToken1");

router.get("/getHistory",verify.verify, sellerHistory.getHistory);

module.exports = router;