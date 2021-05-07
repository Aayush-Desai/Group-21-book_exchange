import React , { useState , useEffect} from "react";
import { Switch } from "react-router";
import "./Box.css";

var temp=[];

function BuyerBox(props) {
    const [req,setReq]=useState([]);

    useEffect(()=>{
        temp=props.request;
        setReq(temp);
        console.log(props.request);
        console.log(props.len);
        console.log(req);
    },[]);

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
    <div className="product1">
    <h2>{props.title}</h2>
    <p>By {props.author}</p>

      <table id="partners">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {props.len===0  ? (
            <tr>
              <td colSpan={6} className="text-muted">
                No Request Yet
              </td>
            </tr>
          ) : (
            req.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.mobile}</td>

                <td>
                  <div className="actions">
                    <button className="deem" onClick={()=>props.deemBook({buyer_email: user.email, book_id:props.book_id, isbn:props.isbn, price:props.price, course:props.course, seller_email:props.email})}>Deem
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BuyerBox;
