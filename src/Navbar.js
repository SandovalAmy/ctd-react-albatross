import React from "react";
import "./index.css";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-name">
        <FaHome />
      </a>
      <ul>
        <li>
          <a href="/todolist">Todo List</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;