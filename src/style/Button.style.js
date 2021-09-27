import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 30px;
  border: 2px solid transparent;
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

export const StyledButtonSmall = styled.button`
  padding: 5px 20px;
  border: 1px solid transparent;
  color: #060d47;
  font-weight: 600;
  margin: 0 10px;
  font-size: 0.75rem;
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
