import React from "react";
import "./index.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-name">
        <FaHome />
      </Link>
      <ul>
        <li>
          <Link to="/todolist">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
