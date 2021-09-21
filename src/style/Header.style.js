import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
`;

export const RightMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  color: #060d47;
  padding: 0 30px;
`;

export const StyledLogo = styled(NavLink)`
  font-size: 2rem;
  background-size: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(1, 215, 49, 1) 1%,
    rgba(0, 80, 154, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
