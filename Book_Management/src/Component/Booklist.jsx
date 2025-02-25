import React from "react";
import "./CSS/Booklist.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Booklist = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const navi = useNavigate();
  useEffect(() => {
  async function temp(){
   await axios
    .get(`http://localhost:8080/book/getbookdata`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => console.log(error));
   }
   temp();
    setLoad(false);
  }, []);
 
  
  function handleClick(id) {
    navi(`/bookview/${id}`);
  }
  return (
    <div className="body_main">
      <table collapse={2}>
        <thead>
          <tr key={1}>
            <th>ID</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>DESCRIPTION</th>
            {/* <th>DATE</th> */}
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {load ? (
            <tr colSpan="5">
              <td>...loading</td>
            </tr>
          ) : (
            data.map((i) => (
              <tr key={i.id}>
                <td>{i.bookid}</td>
                <td>{i.title}</td>
                <td>{i.author}</td>
                <td>{i.description}</td>
                {/* <td>{i.publish_date}</td> */}
                <td className="no_bottom">
                  <button onClick={() => handleClick(i.id)}>View</button>
                  
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default Booklist;
