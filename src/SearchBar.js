import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "0.8rem 2rem",
    margin: "2.5rem 0rem",
    outline: "none",
    border: "none",
    width: "80%",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  };

  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search Books"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
