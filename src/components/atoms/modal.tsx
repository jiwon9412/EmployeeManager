import { ReactNode } from "react";
import styled from "styled-components";

interface IModal {
  children?: ReactNode;
  height?: string;
}

interface IStyledModal {
  height?: string;
}

const Modal = ({ children, height }: IModal) => {
  return <StyledModal height={height}>{children && children}</StyledModal>;
};

export default Modal;

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: ${(props) => props.height || "70vh"};
  max-height: 500px;
  min-height: 370px;
  z-index: 999;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0.3em 10px 0 #ccc;
`;
