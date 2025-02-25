import React from "react";
import "./CSS/Home.css";
import lib from "./CSS/Image/A1.jpeg";
const Home = () => {
  return (
    <div className="main">
      <div className="st">
        <h2>WELCOME TO BOOK MANAGEMENT SITE</h2>
      </div>
      <div className="inside">
        <div>
          <img src={lib} alt="library" />
        </div>
        <div className="content">
          <h1>Find the book </h1>
          <h1>you're looking for read</h1>
          <p>The website for reach your book</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
