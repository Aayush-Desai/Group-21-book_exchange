// Utilities
const promise = require("../utils/promise");

// Database
const authDAO = require("../DAO/sellerHistory");

exports.getHistory = async (req, res) => {
  var [err, result] = await promise(authDAO.getHistory(req));
  
  if (err) return res.json({ success: false, err_code: err.code, message: err});
  return res.send(result.rows);
};
