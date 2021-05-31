const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const session = require('express-session');
const path = require('path');

// Routes
const auth = require("./routes/auth");
const sellerHistory = require("./routes/sellerHistory");
const seller = require("./routes/seller");
const buy = require("./routes/buy");
const buyerHistory = require("./routes/buyerHistory");
const wishlist = require("./routes/wishlist");
const cookie = require("cookie-parser");

const cors = require("cors");
// Middlewares For BodyParser
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	maxAge: 30 * 86400 * 1000
}));

// ** MIDDLEWARE ** //

// --> Add this
app.use(express.static(__dirname + `../build/`));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cookie("aayushdesai01"));

//Middleware
app.use("/auth", auth);
app.use("/sellerHistory", sellerHistory);
app.use("/seller", seller);
app.use("/buy",buy);
app.use("/buyerHistory",buyerHistory);
app.use("/wishlist",wishlist);

app.all("*", (req, res) => {
  return res.json({ success: false, err_code: 404, message: "Invalid URL!" });
});

// --> Add this
if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, '../build')));
  // Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, '../build', 'index.html'));
	});
  }

app.listen(process.env.PORT || 5000, () => {
  console.log("Server has Started on port 5000");
});
