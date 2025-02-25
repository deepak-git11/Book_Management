import React, { useState } from "react";
import axios from "axios";
import "./CSS/Common.css";
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
    await axios.get().then().catch();
  }

  return (
    <div className="main_body">
      <form action={handleLogin}>
        <div>
          <label htmlFor="username">USERNAME :</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD :</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <button>LOGIN</button>
        </div>
        <div>
          <button>NOT AN ACCOUNT ? </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
