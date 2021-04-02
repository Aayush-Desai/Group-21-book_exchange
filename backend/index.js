const express = require("express");
const app = express();
const bodyparser = require("body-parser");
// Routes
const auth = require("./routes/auth");
const sellerHistory = require("./routes/sellerHistory");
const seller = require("./routes/seller");

// Utilities
// const response = require("./utils/response");

const cors = require("cors");
// Middlewares For BodyParser
app.use(cors());
app.use(bodyparser.json({ limit: "4mb" }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Middlewares
// app.use(response);

app.use("/auth", auth);
app.use("/sellerHistory", sellerHistory);
app.use("/seller", seller);

app.all("*", (req, res) => {
  return res.json({ success: false, err_code: 404, message: "Invalid URL!" });
});

app.listen(5000, () => {
  console.log("Server has Started on port 5000");
});