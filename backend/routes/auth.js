const router = require("express").Router();
const auth = require("../service/auth");

router.post("/signup", auth.signup);
router.post("/signin", auth.signin);
router.post("/logout", auth.logout);


module.exports = router;
