import React, { useState } from "react";
import useToken from "./useToken";
import "./App.css";
//import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import MyProfile from "./MyProfile";
import WishList from "./WishList";

function App() {
  const { token, setToken } = useToken();

  return (
    <React.Fragment>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Route path="/Home" exact component={Home} />
              <Route path="/" exact component={Login} />
              <Route path="/Reg" exact component={Register} />
              <Route path="/AbtUs" exact component={AboutUs} />
              <Route path="/ContUs" exact component={ContactUs} />
              <Route path="/MyProf" exact component={MyProfile} />
              <Route path="/WishList" exact component={WishList} />
            </div>
          </Switch>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
}
export default App;
