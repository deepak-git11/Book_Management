import React from "react";
import "./CSS/Common.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [Newuser, setNewuser] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [err, setErr] = useState("");
  const { username, password, email } = Newuser;
  function handleInput(e) {
    setNewuser({ ...Newuser, [e.target.name]: e.target.value });
  }
  async function handleForm(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/user/postuserdata`, Newuser);
    } catch (err) {
      setErr(err);
    }
    navigate("/profile");
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="username">USERNAME :</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder={"Enter password"}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => handleInput(e)}
            placeholder={"Enter password"}
          />
        </div>
        <div>
          <label htmlFor="confirm_password">CONFIRM PASSWORD :</label>
          <input
            type="password"
            name="c_p"
            // value={c_p}
            // onChange={(e) => handleInput(e)}
            placeholder={"Enter password"}
          />
        </div>
        <div>
          <label htmlFor="email">EMAIL :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleInput(e)}
            placeholder={"Enter email"}
          />
        </div>
        <div>
          <button type="submit">REGISTER</button>
        </div>
        <div>
          {/* <button>ALREADY HAVE ACCOUNT,LOGIN</button> */}
        </div>
        <div>{err}</div>
      </form>
    </div>
  );
};

export default Register;
