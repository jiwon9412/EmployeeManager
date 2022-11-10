import { ReactNode } from "react";
import styled from "styled-components";

const Modal = ({ children }: { children?: ReactNode }) => {
  return <StyledModal>{children && children}</StyledModal>;
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
  height: 60vh;
  z-index: 999;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0.3em 10px 0 #ccc;
`;
