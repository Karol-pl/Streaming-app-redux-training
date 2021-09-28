import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.h2`
  font-weight: 600;
  font-size: 1.6rem;
  padding: 20px 0;
`;

export const Content = styled.p`
  letter-spacing: 1px;
`;

export const Actions = styled.div`
  padding-top: 40px;
`;
