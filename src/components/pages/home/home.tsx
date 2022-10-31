import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../../service/auth_service";

interface Props {
  color?: string;
  slideIndex?: string;
}

const Home = ({ authService }: { authService?: AuthService }): JSX.Element => {
  const location = useLocation();
  const [slideIndex, setSlideIndex] = useState("slide3");

  console.log(authService);
  return (
    <HomeBox>
      <SlideBox>
        <SlideItem color='red' slideIndex={slideIndex} />
        <SlideItem color='blue' />
        <SlideItem color='green' />
      </SlideBox>
      <SlideDot>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
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
  padding: 10px 50px;
`;

const SlideBox = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 300px;
  white-space: nowrap;
  overflow: hidden;
`;

const SlideItem = styled.div<Props>`
  display: inline-block;
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  animation-duration: 1s;
  animation-name: ${(props) => props.slideIndex};
  @keyframes slide1 {
    from {
    }
    to {
      margin-left: 0%;
    }
  }
  @keyframes slide2 {
    from {
    }
    to {
      margin-left: -100%;
    }
  }
  @keyframes slide3 {
    from {
    }
    to {
      margin-left: -200%;
    }
  }
`;

const SlideDot = styled.div`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;

    li {
      margin: 0 30px;
    }
  }
`;
