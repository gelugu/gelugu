import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

import "./page.css";

const Header = () => {
  const [cheat, setCheat] = useState("");

  switch (cheat) {
    case "auth":
    case "фгер":
      return <Redirect push to="/auth" />;
    default:
      break;
  }

  return (
    <header className="header">
      <nav className="navBar">
        <NavLink className="headerLink" to="/" exact>
          CV
        </NavLink>
        <NavLink className="headerLink" to="/projects">
          projects
        </NavLink>
        {/* <NavLink className="headerLink" to="/contacts">
          contacts
        </NavLink>
        <NavLink className="headerLink" to="/blog">
          blog
        </NavLink> */}
        <input
          className="cheat"
          value={cheat}
          onChange={async ({ nativeEvent }) =>
            setCheat(cheat + nativeEvent.data)
          }
        />
      </nav>
    </header>
  );
};

export default Header;
