import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Common.css";
import { useNavigate, useParams } from "react-router-dom";
const Editbook = () => {
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
  const { id } = useParams();
  useEffect(() => {
    async function ss() {
        await axios.get( `http://localhost:8080/book/getbookid/${id}`)
        .then(res=>setBook(res.data))
        .catch (err=>console.log(err));
    }
    ss();
  }, [id]);
  const { bookid, title, author, description, publish_date, comment, review } =
    book;

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/book/putbook/${id}`, book);
    } catch (err) {
      console.log(err);
    }
    navigate(`/bookview/${id}`);
  }
  function handleInput(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleUpdate}>
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
          <button type="submit">Update</button>
        </div>
      </form>

    </div>
  );
};

export default Editbook;
