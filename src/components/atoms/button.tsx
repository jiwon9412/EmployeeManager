import React from "react";
import styled from "styled-components";

interface IButton {
  title: string;
  color?: string;
  backgroundColor?: string;
  width: string;
  height?: string;
  onClick?: (e: React.MouseEvent) => void;
}

interface IStyledButton {
  color?: string;
  backgroundColor?: string;
  width: string;
  height?: string;
}

const Button = ({
  title,
  color,
  width,
  height,
  backgroundColor,
  onClick,
}: IButton) => {
  return (
    <StyledButton
      color={color}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onClick={onClick && onClick}
    >
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<IStyledButton>`
  background-color: ${(props) => props.backgroundColor || "#ccc"};
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "3em"};
  border-radius: 10px;
  color: ${(props) => props.color || "#000"};
  font-weight: 600;
  border-style: none;
  cursor: pointer;
`;
