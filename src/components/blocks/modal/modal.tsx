import React from "react";
import styled from "styled-components";

const Modal = () => {
  return <StyledModal></StyledModal>;
};

export default Modal;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 70vh;
  z-index: 999;
  background-color: #ccc;
`;
