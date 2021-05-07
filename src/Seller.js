import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WishList.css";
import Navbar from "./NavBar";
import WishlistBox from "./WishlistBox";
import Home from "./Home";
import MyProf from "./MyProfile";
import { addtowishlist } from "./Home";
import { NavLink } from "react-router-dom";
import getFromwishlist from "../src/service/wishlist/GetFromwishlist";
import removeFromwishlist from "../src/service/wishlist/removeFromwishlist";
import buyBook from "../src/service/buy/BuyBook";
import Modal from "@material-ui/core/Modal";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from './App';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
    //maxWidth: "500px"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  form: {
    fontfamily: "Georgia",
    padding: "20px",
    width: "100%",
    maxWidth: "500px",
    background: "#000"
  },
  area: {
    width: "100%",
    background: "rgba(255,255,255,.1)",
    border: "none",
    borderRadius: "4px",
    fontSize: "15px",
    outline: "0",
    padding: "10px",
    margin: "1em auto",
    boxSizing: "border-box",
    backgroundColor: "#e8eeef",
    color: "#8a97a0"
  },
  submit: {
    color: "#FFF",
    margin: "1em auto",
    background: "#1abc9c",
    fontSize: "18px",
    textAlign: "center",
    fontStyle: "normal",
    width: "100%",
    border: "1px solid #16a085",
    borderWidth: "1px 1px 3px",
    marginBottom: "10px",
    padding: "15px"
  }
}));

export default function WishList() {

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = async (data) => {
    console.log(data);
  };


  const [bookList, setBookList] = useState([]);
  const [bookName, setBookName] = useState("xyz1");
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const init = async () => {
      const data = await getFromwishlist();
      //console.log();
      setBookList(data);
    };
    init();
  }, []);

  const handleBuyBook = async (book_id) => {
    const data = await buyBook({ email: user.email, book_id: book_id });
    alert(data.message);
  }

  const handleRemove = async (book_id) => {
    const data = await removeFromwishlist({ book_id: book_id });
    alert(data.message);
    const data1 = await getFromwishlist();
    setBookList(data1);
  }

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home__container">
          <div className="home__sidebar">
            <div className="button__container">
              <NavLink to="/Home" className="sidebar__button">
                <button className="button__in">Dashboard</button>
              </NavLink>

              <NavLink to="/WishList" className="sidebar__button">
                <button className="button__in">Wishlist</button>
              </NavLink>
              <NavLink to="/Home" className="sidebar__button">
                <button className="button__in">History</button>
              </NavLink>
              <NavLink to="/Home" className="sidebar__button">
                <button className="button__in">As Seller</button>
              </NavLink>
              <NavLink to="/MyProf" className="sidebar__button">
                <button className="button__in">My Profile</button>
              </NavLink>
            </div>
          </div>
          <div className="home__mainbar">
            <div className="mainbar__container">
              <h1> Seller </h1>

              <div className="pop-up">
                <button
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Add
                </button>

                <Modal
                  className={classes.modal}
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <input
                      type="text"
                      className={classes.area}
                      name="username"
                      placeholder="Book name"
                    />
                    <input
                      className={classes.area}
                      name="password"
                      placeholder="Author"
                      type="text"
                    />
                    <input
                      className={classes.area}
                      name="password"
                      placeholder="Price"
                      type="text"
                    />
                    <input
                      className={classes.area}
                      name="password"
                      placeholder="ISBN"
                      type="text"
                    />
                    <input
                      className={classes.area}
                      name="password"
                      placeholder="Course"
                      type="text"
                    />
                    <input className={classes.submit} type="submit" value="Login" />
                    {console.log(errors)}
                  </form>
                </Modal>
              </div>

              <div className="home__row">
                {bookList && bookList.map((book) => (
                  < WishlistBox
                    key={book.book_id}
                    book_id={book.book_id}
                    isbn={book.isbn}
                    email={book.email}
                    title={book.book_name}
                    author={book.author}
                    price={book.price}
                    handleRemove={handleRemove}
                    handleBuyBook={handleBuyBook}
                  />
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
