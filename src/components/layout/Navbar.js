import React from "react";

const Navbar = () => {
  return (
    <div className="navbar--container">
      <ul className="nav-links">
      <li>
          <a href="#" className="logo">
            BookFinder
          </a>
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
