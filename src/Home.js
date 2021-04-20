import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ProductBox from "./ProductBox";
import { NavLink } from "react-router-dom";
import WishlistBox from "./WishlistBox";
import Navbar from "./NavBar";
import SearchBar from "./SearchBar";
import MyProf from "./MyProfile";
import WishList from "./WishList";
import getAvailableBook from "../src/service/buy/GetAvailableBook";
import searchBook from "../src/service/buy/SearchBook";
import addToWishList from "../src/service/buy/AddToWishList";
import buyBook from "../src/service/buy/BuyBook";
import {AuthContext} from './App';


let addtowishlist=[]
function Home() {
  const style = {
    margin: "20px auto",
    color: "grey"
  };

  const [bookList,setBookList]=useState([]);
  const [bookName,setBookName]=useState("");
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const init = async () => {
      const data = await getAvailableBook();
      console.log(data);
      setBookList(data);
    };
    init();
  },[]);

  const handleSearch = async () => {
    //console.log("HII");
    //setBookName(bookName);
    const data=await searchBook({bookName});
    setBookList(data);
    
  }

  const handleWishList= async (book_id) =>{
    const data=await addToWishList({email: user.email,book_id: book_id});
    alert(data.message);
  }

  const handleBuyBook= async (book_id) =>{
    const data=await buyBook({email: user.email,book_id: book_id});
    alert(data.message);
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
            <div className="searchbar_container">
              <SearchBar />
            </div>
            <div className="mainbar__container">
              <h1>Hello, 201801441</h1>
              <h3 style={style}>Your Dashboard</h3>
            </div>


            <div className="home__row">

              { bookList &&  bookList.map((book) => (
                < ProductBox
                  key={book.book_id}
                  title={book.book_name}
                  author={book.author}
                  price={book.price}
                  handleWishList={handleWishList}
                  handleBuyBook={handleBuyBook}
                />
              )) 
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
export { addtowishlist };
