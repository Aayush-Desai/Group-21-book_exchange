const {Pool , Client}=require("pg");
require("dotenv").config();

const pool= new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "book_exchange",
  port: 5432
});

// pool.query('SELECT * FROM book_exchange.USERS', (err, res) => {
//   console.log(err);
// 	pool.end();
// });

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "book_exchange",
  port: 5432
});

client.connect();

// client.query('SELECT * FROM book_exchange.USERS', (err, res) => {
// 	console.log(res.rows);
// });

module.exports = client;
