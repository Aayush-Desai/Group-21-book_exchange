import React from "react";
import "./WishlistBox.css";

function WishlistBox(props) {
  const style = {
    backgroundColor: "lightgreen"
  };
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
  return (
    <div className="product">
    <h4>{props.title}</h4>
    <p>By {props.author}</p>
    <h4 className="product__price">${props.price}</h4>
    <p >Name: {props.name}</p>
    <p>Mobile: {props.mobile}</p>
      <button style={{marginTop:"-3.5%",backgroundColor:"lightgreen"}}  onClick={()=>props.handleBuyBook(props.book_id)} >Buy Now</button>
      <button onClick={()=>props.handleRemove(props.book_id)} style={black__style}>Remove</button>
    </div>
  );
}

export default WishlistBox;
