import React from "react";
import "./CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>HOME</Link>
      <Link to={"/booklist"}>BOOK_LIST</Link>
      <Link to={"/addbook"}>ADD_BOOK</Link>
      <Link to={"/profile"}>USER_LIST</Link>
      <Link to={"/register"}>USER_REGISTER</Link>
    </div>
  );
};

export default Navbar;
