import React from "react";
import { NavLink } from "react-router-dom";

import "./page.css";

class Header extends React.Component {
  state = { currentPage: "cv" };

  onPageClick(value) {
    this.props.updatePage(value);
    this.setState({ currentPage: value });
  }

  render() {
    return (
      <header className="header">
        <nav className="navBar">
          <NavLink
            className="headerLink"
            to="/"
            exact
          >
            CV
          </NavLink>
          <NavLink
            className="headerLink"
            to="/projects"
          >
            projects
          </NavLink>
          <NavLink
            className="headerLink"
            to="/contacts"
          >
            contacts
          </NavLink>
          <NavLink
            className="headerLink"
            to="/blog"
          >
            blog
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
