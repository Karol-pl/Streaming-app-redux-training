import React from "react";
import ReactDOM from "react-dom";
import {
  ModalContainer,
  ModalWrapper,
  Header,
  Content,
  Actions,
} from "../style/Modal.style";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalWrapper onClick={props.onDismiss}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>{props.title}</Header>
        <Content>{props.content}</Content>
        <Actions>{props.actions}</Actions>
      </ModalContainer>
    </ModalWrapper>,
    document.getElementById("modal")
  );
};

export default Modal;
