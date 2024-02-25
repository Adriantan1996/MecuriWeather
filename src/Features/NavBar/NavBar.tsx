/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navigation-menu" data-testid="NavBar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
