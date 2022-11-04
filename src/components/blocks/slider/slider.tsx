import { useState } from "react";
import styled from "styled-components";

interface SlideProps {
  color?: string;
  currSlide?: number;
}

interface DotProps {
  active?: number;
}

const Slider = (): JSX.Element => {
  const [currSlide, setCurrSlide] = useState(0);
  const slide = (index: number): void => {
    setCurrSlide(index);
  };
  return (
    <SlideBox>
      <ItemBox>
        <SlideItem color='red' currSlide={currSlide} />
        <SlideItem color='blue' />
        <SlideItem color='green' />
      </ItemBox>
      <SlideDot active={currSlide + 1}>
        <span onClick={() => slide(0)}></span>
        <span onClick={() => slide(1)}></span>
        <span onClick={() => slide(2)}></span>
      </SlideDot>
    </SlideBox>
  );
};

export default Slider;

const SlideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 60%;
`;

const ItemBox = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  aspect-ratio: 4 / 5; /* 16:9 비율 지정 */
  white-space: nowrap;
  overflow: hidden;
`;

const SlideItem = styled.div<SlideProps>`
  flex: none;
  background-color: ${(props) => props.color};
  margin-left: ${(props) => `-${props.currSlide}00%`};
  transition: margin 1000ms;
  width: 100%;
  height: 100%;
`;

const SlideDot = styled.div<DotProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1em;

  span {
    display: block;
    margin: 0 1em;
    cursor: pointer;
    width: 1em;
    height: 1em;
    min-width: 10px;

    border-radius: 50%;
    border: 1px solid #385461;
  }
  span:nth-child(${(props) => props.active}) {
    background-color: #385461;
  }
`;
