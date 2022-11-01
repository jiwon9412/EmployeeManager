import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../../service/auth_service";

interface Props {
  color?: string;
  preSlide?: number;
  currSlide?: number;
}

const Home = ({ authService }: { authService?: AuthService }): JSX.Element => {
  const location = useLocation();
  const [preSlide, setPreSlide] = useState(1);
  const [currSlide, setCurrSlide] = useState(1);

  const slide = (index?: number): void => {
    if (currSlide !== index) {
      setPreSlide(currSlide);
    }
    index && setCurrSlide(index);
  };

  console.log(`preSlide : ${preSlide}`);
  console.log(`currSlide : ${currSlide}`);
  return (
    <HomeBox>
      <SlideBox>
        <SlideItem color='red' preSlide={preSlide} currSlide={currSlide} />
        <SlideItem color='blue' />
        <SlideItem color='green' />
      </SlideBox>
      <SlideDot>
        <span onClick={() => slide(1)}>○</span>
        <span onClick={() => slide(2)}>○</span>
        <span onClick={() => slide(3)}>○</span>
      </SlideDot>
    </HomeBox>
  );
};

export default Home;

const HomeBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 10px 15%;
`;

const SlideBox = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 40vh;
  white-space: nowrap;
  overflow: hidden;
`;

const SlideItem = styled.div<Props>`
  display: inline-block;
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  margin-left: 0%;
  animation-duration: 1s;
  animation-name: ${(props) =>
    props.preSlide !== props.currSlide
      ? `slide${props.preSlide}${props.currSlide}`
      : ""};
  animation-fill-mode: forwards;
  @keyframes slide12 {
    from {
      margin-left: 0%;
    }
    to {
      margin-left: -100%;
    }
  }
  @keyframes slide13 {
    from {
      margin-left: 0%;
    }
    to {
      margin-left: -200%;
    }
  }
  @keyframes slide21 {
    from {
      margin-left: -100%;
    }
    to {
      margin-left: 0%;
    }
  }
  @keyframes slide23 {
    from {
      margin-left: -100%;
    }
    to {
      margin-left: -200%;
    }
  }
  @keyframes slide31 {
    from {
      margin-left: -200%;
    }
    to {
      margin-left: 0%;
    }
  }
  @keyframes slide32 {
    from {
      margin-left: -200%;
    }
    to {
      margin-left: -100%;
    }
  }
`;

const SlideDot = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1em;
  span {
    margin: 0 1em;
    cursor: pointer;
    //color: blue;
  }
`;
