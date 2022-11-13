import { useRef } from "react";
import styled from "styled-components";

interface IComboWithTitle {
  title?: string;
  width: string;
  height: string;
  interval?: string;
  list: string[];
  setValue?: (value: string) => void;
}

interface IStyledCombo {
  width: string;
  height: string;
  interval?: string;
}

const ComboWithTitle = ({
  title,
  width,
  height,
  interval,
  list,
  setValue,
}: IComboWithTitle) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const conveyValue = () => {
    setValue && selectRef.current?.value && setValue(selectRef.current?.value);
  };
  return (
    <StyledBox>
      <p>{title} </p>
      <StyledCombo
        width={width}
        height={height}
        interval={interval}
        ref={selectRef}
        onChange={conveyValue}
      >
        {list.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </StyledCombo>
    </StyledBox>
  );
};

export default ComboWithTitle;

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

const StyledCombo = styled.select<IStyledCombo>`
  width: ${(porps) => porps.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.interval || "1em"};
  padding: 0.1em 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  outline: none;
  &:focus {
    outline: 2px solid #058ae7;
  }
`;
