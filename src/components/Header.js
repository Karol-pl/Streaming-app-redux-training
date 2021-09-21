import React from "react";
import { NavBar, RightMenu, NavLink, StyledLogo } from "../style/Header.style";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <NavBar>
      <StyledLogo to="/" className="logo">
        Streamy
      </StyledLogo>
      <RightMenu>
        <NavLink to="/" className="item">
          All Streams
        </NavLink>
        <GoogleAuth />
      </RightMenu>
    </NavBar>
  );
};

export default Header;
