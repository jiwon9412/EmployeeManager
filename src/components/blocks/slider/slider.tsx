import { useState } from "react";
import styled from "styled-components";

interface SlideProps {
  color?: string;
  currSlide?: number;
  image: string;
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
        <SlideItem image='slider_image1.png' currSlide={currSlide}></SlideItem>
        <SlideItem image='slider_image2.png'></SlideItem>
        <SlideItem image='slider_image3.jpg'></SlideItem>
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
  max-height: 50%;
`;

const ItemBox = styled.div`
  display: flex;
  width: 70%;

  aspect-ratio: 4 / 5;
  white-space: nowrap;
  overflow: hidden;
`;

const SlideItem = styled.div<SlideProps>`
  flex: none;
  margin-left: ${(props) => `-${props.currSlide}00%`};
  transition: margin 1000ms;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(/images/${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
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
