import React,{ useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./history.css";
import Navbar from "./NavBar";
import BuyerBox from "./BuyerBox";
import SellerBox from "./SellerBox";
import Home from "./Home";
import MyProf from "./MyProfile";
import { addtowishlist } from "./Home";
import { NavLink } from "react-router-dom";
import GetBuyerHistory from "../src/service/buyerHistory/GetbuyerHistory";
import GetSellerHistory from "../src/service/sellerHistory/getHistory";
import buyBook from "../src/service/buy/BuyBook";
import './history.css';
import {AuthContext} from './App';

export default function WishList() {

    const [active,setActive]=useState(0);

    const [buyerBookList,setBuyerBookList]=useState([]);
    const [sellerBookList,setSellerBookList]=useState([]);
    const [bookName,setBookName]=useState("xyz1");
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        const init = async () => {
          const data=await GetBuyerHistory({email: user.email});
          //console.log(data);
          setBuyerBookList(data);
          const data1=await GetSellerHistory();
          console.log(data);
          setSellerBookList(data1);
        };
        init();
    },[]);

    const onClickHandler = (tempActive) =>{
        if(tempActive!=active) setActive(tempActive);
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
            <div style={{display:"flex",justifyContent:"center",height:"60px",marginBottom:"10%"}}>
                <button className="button" onClick={()=>onClickHandler(0)}> Buyer History </button>
                <button className="button" onClick={()=>onClickHandler(1)}> Seller History </button>
            </div>
            <div >
            {!active ? (
                <div className="home__row">
                  {buyerBookList.map((book) => (
                      < BuyerBox
                        key={book.book_id}
                        email={book.seller_email}
                        title={book.book_name}
                        author={book.author}
                        price={book.price}
                        mobile={book.mobile}
                        name={book.seller_name}
                        status={book.status}
                      />
                    ))
                  }
                </div>
            ):
            (<div className="home__row">
                {sellerBookList && sellerBookList.map((book) => (
                    < SellerBox
                    key={book.book_id}
                    title={book.book_name}
                    author={book.author}
                    price={book.price}
                    name={book.buyer_name}
                    mobile={book.mobile}
                    />
                ))
                }
            </div>)
            }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
