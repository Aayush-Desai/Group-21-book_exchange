import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Box.css";
import Navbar from "./NavBar";
import Box from "./Box";
import Home from "./Home";
import MyProf from "./MyProfile";
import { addtowishlist } from "./Home";
import { NavLink } from "react-router-dom";
import DeemBook from "../src/service/seller/DeemBook";
import SellBook from "../src/service/seller/SellBook";
import GetBooksForSale from "../src/service/seller/GetBooksForSale";
import GetRequests from "../src/service/seller/GetRequests";
//import buyBook from "../src/service/buy/BuyBook";
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

var request=[];
var len=[];

export default function WishList() {

  const [bookList, setBookList] = useState([]);
  const { user} = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  
  const getDetails = async () =>{
    const data = await GetBooksForSale();
      console.log(data);
      request=[];
      len=[];
      for(var i=0;i<data.length;i++)
      {
        const res=await GetRequests({book_id: data[i].book_id});
        //console.log(res.length);
        len.push(res.length);
        request.push(res);
      }
      setBookList(data);
      //console.log(request.length);
  }
  
  const onSubmit = async (data) => {
    const response=await SellBook({email: user.email, isbn:data.isbn, price:data.price, course:data.course, book_name:data.bookname, author:data.author});
    console.log(response);
    setOpen(false);
    await getDetails();
  };

  const deemBook = async ({buyer_email, book_id, isbn, price, course, seller_email}) => {
    const response=await DeemBook({buyer_email, book_id, isbn, price, course, seller_email});
    console.log(response);
    await getDetails();
  };

  useEffect(() => {
    const init = async () => {
      await getDetails();
    };
    init();
  }, []);


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
              <div style={{display:"flex",justifyContent:"center"}}>
                <button
                style={{width:"80px",
                margin:"auto",
                borderRadius: "10px",
                width:"15%",
                color:"white",
                padding: "4px 13px",
                fontSize: "1.1vw",
                backgroundColor:"rgb(0, 110, 255)",
                marginBottom:"5%"}}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Add
              </button>
              </div>

              <div className="pop-up">

                <Modal
                  className={classes.modal}
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <input
                      {...register("bookname")}
                      type="text"
                      className={classes.area}
                      name="bookname"
                      placeholder="Book name"
                      required={true}
                    />
                    <input
                      {...register("author")}
                      className={classes.area}
                      name="author"
                      placeholder="Author"
                      type="text"
                      required={true}
                    />
                    <input
                      {...register("price")}
                      className={classes.area}
                      name="price"
                      placeholder="Price"
                      type="text"
                      required={true}
                    />
                    <input
                      {...register("isbn")}
                      className={classes.area}
                      name="isbn"
                      placeholder="ISBN"
                      type="text"
                      required={true}
                    />
                    <input
                      {...register("course")}
                      className={classes.area}
                      name="course"
                      placeholder="Course"
                      type="text"
                      required={true}
                    />
                    <input className={classes.submit} type="submit" value="Submit" />
                  </form>
                </Modal>
              </div>

              <div className="home__row">
                {bookList && bookList.map((book,index) => (
                  < Box
                    key={book.book_id}
                    book_id={book.book_id}
                    isbn={book.isbn}
                    price={book.price}
                    course={book.course}
                    title={book.book_name}
                    author={book.author}
                    request={request[index]}
                    email={user.email}
                    len={len[index]}
                    deemBook={deemBook}
                  />
                ))
                }
                {!bookList && <h3>No Books kept for Sale</h3>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
