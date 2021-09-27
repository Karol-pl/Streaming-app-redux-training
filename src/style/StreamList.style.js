import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.2rem;
  background-size: 100%;
  padding: 10px;
  background-image: linear-gradient(
    45deg,
    rgba(1, 215, 49, 1) 1%,
    rgba(0, 80, 154, 1) 20%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  width: 100%;
`;

export const ListItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 0;
  color: #060d47;
  border-bottom: 1px solid #060d47;
  cursor: pointer;

  & h3 {
    padding: 10px 0;
    font-size: 1.4rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px 30px;
  margin: 10px 20px;
  border: 1px solid transparent;
  color: #060d47;
  font-weight: 600;
  font-size: 1.2rem;
  background-image: linear-gradient(
    45deg,
    rgba(1, 215, 49, 1) 1%,
    rgba(0, 80, 154, 1) 100%
  );
  background-origin: border-box;
  background-clip: border-box;
  -webkit-background-clip: border-box;
  -moz-background-clip: border-box;
  box-shadow: 0px 1000px 0px #fff inset;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: none;
    color: #ffffff;
  }
`;
