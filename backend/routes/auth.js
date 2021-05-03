const router = require("express").Router();
const auth = require("../service/auth");
const verify = require("../service/verify");

router.post("/signup", auth.signup);
router.post("/signin", auth.signin);
router.post("/logout", auth.logout);
router.get("/getprofile", verify.verify, auth.getprofile);
router.put("/updateprofile",verify.verify,  auth.updateprofile);

module.exports = router;
