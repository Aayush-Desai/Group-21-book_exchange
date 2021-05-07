import React from "react";
import "./ProductBox.css";
import buyBook from "../src/service/buy/BuyBook";
import addToWishList from "../src/service/buy/AddToWishList";
import { AuthContext } from './App';

function ProductBox(props) {


  const black__style = {
    backgroundColor: "white",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "white",
      border: "1px solid black",
      boxShadow:
        "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
    }
  };


  // const handleWishList = async (book_id) => {
  //   const data = await addToWishList({ email: user.email, book_id: book_id });
  //   alert(data.message);
  // }

  // const handleBuyBook = async (book_id) => {
  //   const data = await buyBook({ email: user.email, book_id: book_id });
  //   alert(data.message);
  // }

  return (
    <div className="product">
    <div className="product__info">
      <h2 >{props.title}</h2>
    </div>
      <div className="product__info">
        <p>By {props.author}</p>
        <h3 className="product__price">${props.price}</h3>
      </div>
              <button onClick={() => props.handleBuyBook(props.book_id)}>Buy Now</button>
      <button style={black__style} onClick={() => props.handleWishList(props.book_id)}>
        Wishlist
      </button>
    </div>
  );
}

export default ProductBox;
