import React from "react";

const SearchBar = ({ bookName, setBookName ,handleSearch}) => {
  const BarStyling = {
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "0.8rem 2rem",
    margin: "2.5rem 0rem",
    outline: "none",
    border: "none",
    width: "50%",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  };
  const button = {
    background: "rgb(0, 225, 255)",
    border: "1px solid white",
    borderRadius: "30px",
    marginLeft: "2rem",
    width: "15%",
    color: "#000",
    padding: "7px 20px",
    fontWeight: "500",
    outline: "none"
  }

  return (
    <div>
    <input
      style={BarStyling}
      key="random1"
      value={bookName}
      placeholder={"Search Books"}
      onChange={(e) => setBookName(e.target.value)}
    />
    <button style={button} onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
