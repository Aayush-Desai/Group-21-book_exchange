import React from "react";
import { Switch } from "react-router";
import "./BuyerBox.css";

function BuyerBox(props) {
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
      <p style={{fontSize:"1.5vw"}}>Name: {props.name}</p>
      <p style={{fontSize:"1.5vw"}}>mobile: {props.mobile}</p>
    </div>
  );
}

export default BuyerBox;
