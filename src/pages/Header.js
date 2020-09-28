import React from "react";
import { NavLink } from "react-router-dom";

import "./page.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navBar">
        <NavLink className="headerLink" to="/" exact>
          CV
        </NavLink>
        <NavLink className="headerLink" to="/projects">
          projects
        </NavLink>
        <NavLink className="headerLink" to="/contacts">
          contacts
        </NavLink>
        <NavLink className="headerLink" to="/blog">
          blog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
