import React,{ useState, useEffect, useContext } from "react";
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

import {AuthContext} from './App';

export default function WishList() {
  const [bookList,setBookList]=useState([]);
  const [bookName,setBookName]=useState("xyz1");
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const init = async () => {
      const data=await getFromwishlist();
      //console.log();
      setBookList(data);
    };
    init();
  },[]);

  const handleBuyBook= async (book_id) =>{
    const data=await buyBook({email: user.email,book_id: book_id});
    alert(data.message);
  }

  const handleRemove= async (book_id) =>{
    const data=await removeFromwishlist({book_id: book_id});
    alert(data.message);
    const data1=await getFromwishlist();
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
                <NavLink to="/History" className="sidebar__button">
                    <button className="button__in">History</button>
                </NavLink>
                <NavLink to="/Seller" className="sidebar__button">
                    <button className="button__in">As Seller</button>
                </NavLink>
                <NavLink to="/MyProf" className="sidebar__button">
                    <button className="button__in">My Profile</button>
                </NavLink>
                </div>
            </div>
          <div className="home__mainbar">
            <div className="mainbar__container">
            <h1> Wishlist </h1>
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
