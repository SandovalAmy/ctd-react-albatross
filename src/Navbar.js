import React from "react";
import "./index.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-name">
        <FaHome />
      </a>
      <ul>
        <li>
          <Link to="/todolist">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;