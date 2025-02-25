import React from "react";
import { Route, Routes } from "react-router-dom";
import Booklist from "./Booklist";
import Addbook from "./Addbook";
import Profile from "./Profile";
import Logout from "./Logout";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Bookview from "./Bookview";
import Editbook from "./Editbook";
const Routepath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booklist/*" element={<Booklist />} />
        <Route path="/bookview/:id" element={<Bookview />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/editbook/:id" element={<Editbook />} />
      </Routes>
    </div>
  );
};

export default Routepath;
