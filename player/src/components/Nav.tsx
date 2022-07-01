import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { NavContainer } from "./styles/NavStyled";

function Nav() {
  return (
    <NavContainer>
      <NavLink to="/">Right</NavLink>
      <NavLink to="/about">Left</NavLink>
    </NavContainer>
  );
}

export default Nav;
