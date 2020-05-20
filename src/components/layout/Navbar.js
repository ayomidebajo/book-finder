import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar--container">
      <ul className="nav-links">
        <li>
          <Link to="/" className="logo">BookFinder</Link>
        </li>
        <li>
          <a href="#" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
