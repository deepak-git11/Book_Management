import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/Bookview.css";
import { useParams, useNavigate } from "react-router-dom";
const Bookview = () => {
  const [List, setList] = useState([]);
  const { id } = useParams();
  const navig = useNavigate();
  useEffect(() => {
    async function fetch() {
      try {
        const res = await axios.get(
          `http://localhost:8080/book/getbookid/${id}`
        );
        setList(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, [id]);
  async function handleDelete(id){
    if(  window.confirm(`Are you sure to delete ${id}`)){
       axios
     .delete(`http://localhost:8080/book/deletebook/${id}`)
     .catch(err=>console.log(err));
     navig("/booklist");
      }
       }
  return (
    <div className="box">
      <div>
        <p>ID : </p>
        <p>{id}</p>
      </div>
      <div>
        <p>Bookid : </p>
        <p>{List.bookid}</p>
      </div>
      <div>
        <p>Title : </p>
        <p>{List.title}</p>
      </div>
      <div>
        <p>Author : </p>
        <p>{List.author}</p>
      </div>
      <div>
        <p>Description : </p>
        <p>{List.description}</p>
      </div>
      <div>
        <p>Publish_date : </p>
        <p>{List.publish_date}</p>
      </div>
      <div>
        <p>Comment : </p>
        <p>{List.comment}</p>
      </div>
      <div>
        <p>Review : </p>
        <p>{List.review}</p>
      </div>
      <button onClick={() => navig("/booklist")}>BACK</button>
      <button onClick={() => navig(`/editbook/${List.id}`)}>EDIT</button>
      <button onClick={()=>handleDelete(List.id)}>Delete</button>
    </div>
  );
};

export default Bookview;
