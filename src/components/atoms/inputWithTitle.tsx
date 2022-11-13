import React, { Ref, useRef } from "react";
import styled from "styled-components";

interface IInputWithTitle {
  title?: string;
  width: string;
  height: string;
  interval?: string;
  setValue?: (value: string) => void;
}
interface IStyledInput {
  width: string;
  height: string;
  interval?: string;
}

const InputWithTitle = ({
  title,
  width,
  height,
  interval,
  setValue,
}: IInputWithTitle) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const conveyValue = () => {
    setValue && inputRef.current?.value && setValue(inputRef.current?.value);
  };
  return (
    <StyledBox>
      <p>{title} </p>
      <StyledInput
        width={width}
        height={height}
        interval={interval}
        ref={inputRef}
        onChange={conveyValue}
      />
    </StyledBox>
  );
};

export default InputWithTitle;

const StyledBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  p {
    width: 20%;
    min-width: 80px;
    font-size: 1em;
    font-weight: 600;
  }
`;

const StyledInput = styled.input<IStyledInput>`
  width: ${(porps) => porps.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.interval || "1em"};
  border: 1px solid #ccc;
  border-radius: 1em;
  padding: 0 1em;
  outline: none;
  &:focus {
    outline: 2px solid #058ae7;
  }
`;
