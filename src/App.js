import React, { useState, useEffect } from "react";
//import useToken from "./useToken";
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
//import GoogleBtn from "./GoogleBtn";

export const AuthContext = React.createContext();

function App() {
  //
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("http://localhost:8000/api/user", {
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include"
  //     });

  //     const content = await response.json();
  //   })();
  // });
  const [isSet, setVar] = useState({});
  const [user, setUser] = useState({});
  //if(!isSet) return <Login setVar={setVar}/>
    // Component Did Mount
    useEffect(() => {
      const init = async () => {
        setVar(false);
      };
      init();
    }, []);
  console.log(isSet);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{isSet,setVar,user,setUser}}>
        {!isSet?(
          <Switch>
          <div className="App">
            <Route path="/" exact component={Login} />
            <Route path="/Reg" exact component={Register} />
            <Route path="/AbtUs" exact component={AboutUs} />
            <Route path="/ContUs" exact component={ContactUs} />
            <Redirect to="/"/>
          </div>
          </Switch>
        ):(
          <Switch>
          <div className="App">
            <Route path="/Home" exact component={Home} />
            <Route path="/AbtUs" exact component={AboutUs} />
            <Route path="/ContUs" exact component={ContactUs} />
            <Route path="/MyProf" exact component={MyProfile} />
            <Route path="/WishList" exact component={WishList} />
            <Route path="/" exact component={Login} />
            <Redirect to="/Home"/>
          </div>
          </Switch>
        )}
      </AuthContext.Provider>
    </BrowserRouter>
  );
}
export default App;
