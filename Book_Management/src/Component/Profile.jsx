import React, { useEffect, useState } from "react";
import "./CSS/Profile.css"
import axios from "axios";
const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/getuserdata")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main_list">
      <h1>Users information</h1>
      {user.map((data) => (
        <div className="box">
          <div>
            <p>Name </p>
            <p>{data.username}</p>
          </div>
          <div>
            <p>Email </p>
            <p>{data.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
