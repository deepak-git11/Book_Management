import React, { useState } from "react";
import axios from "axios";
import "./CSS/Common.css";
import { useNavigate } from "react-router-dom";
const Addbook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookid: "",
    title: "",
    author: "",
    description: "",
    publish_date: "",
    comment: "",
    review: "",
  });
  const { bookid, title, author, description, publish_date, comment, review } =
    book;

  async function handleForm(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/book/postbook", book);
    } catch (err) {
      console.log(err);
    }
    navigate("/booklist");
  }
  function handleInput(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="bookid">BOOK ID </label>
          <input
            type="text"
            name="bookid"
            placeholder="Enter bookid"
            value={bookid}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="title">TITLE </label>
          <input
            type="text"
            name="title"
            placeholder={"Enter title"}
            value={title}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="author">AUTHOR </label>
          <input
            type="text"
            name="author"
            value={author}
            placeholder={"Enter author"}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="description">DESCRIPTION </label>
          <input
            type="text"
            name="description"
            value={description}
            placeholder={"Enter description"}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="publish_date">PUBLISH DATE </label>
          <input
            type="date"
            name="publish_date"
            value={publish_date}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="review">REVIEW </label>
          <input
            type="text"
            name="review"
            value={review}
            placeholder={"Enter review"}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="comment">COMMENT </label>
          <input
            type="text"
            name="comment"
            value={comment}
            placeholder={"Enter comments"}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Addbook;
