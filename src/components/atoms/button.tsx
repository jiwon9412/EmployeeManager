import styled from "styled-components";

interface IButton {
  title: string;
  color?: string;
  backgroundColor?: string;
  width: string;
  height?: string;
}

interface IStyledButton {
  color?: string;
  backgroundColor?: string;
  width: string;
  height?: string;
}

const Button = ({ title, color, width, height, backgroundColor }: IButton) => {
  return (
    <StyledButton
      color={color}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
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
  font-weight: 500;
  border-style: none;
  cursor: pointer;
`;
