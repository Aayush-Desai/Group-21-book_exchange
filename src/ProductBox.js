import React from "react";
import "./ProductBox.css";

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

  function handleClick(e) {
    var x = {
      title: props.title,
      author: props.author,
      price: props.price
    };
    props.addtowishlist.push(x);
    console.log(props.addtowishlist);
  }

  return (
    <div className="product">
      <div className="product__info">
        <h2>{props.title}</h2>
        <p>By {props.author}</p>
        <h3 className="product__price">${props.price}</h3>
      </div>
      <button>Buy Now</button>
      <button style={black__style} onClick={handleClick}>
        Wishlist
      </button>
    </div>
  );
}

export default ProductBox;
