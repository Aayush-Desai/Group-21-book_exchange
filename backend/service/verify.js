// Required Modules
require("dotenv").config();


// Buy Book
exports.verify = async (req,res,next) => {
    if(!req.sessionID || !req.session.loggedin || !req.session.user) return res.send({ success: false, err_code: 403, message: "Access Denied" });;
    return next();
}