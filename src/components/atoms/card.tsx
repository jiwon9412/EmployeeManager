import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyleCard>
      <img src={require(`../../assets/jiwon.png`)} alt='' />
      <IntroBox>
        <p id='name'>정지원</p>
        <p>반갑습니다 :)</p>
      </IntroBox>
      <InfoBox>
        <p>소속 : 개발팀</p>
        <p>직급 : 사원</p>
        <p>전화 : 010-9999-2222</p>
      </InfoBox>
    </StyleCard>
  );
};

export default Card;

const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 20%;
  min-width: 230px;
  aspect-ratio: 4 / 5;
  /* border: 1px solid black; */
  border-radius: 5%;
  box-shadow: 0 0.3em 10px 0 #ccc;

  img {
    display: block;
    width: 35%;
    position: absolute;
    top: 1.5em;
    left: 1.5em;
  }
`;

const IntroBox = styled.div`
  width: 100%;
  height: 40%;
  background-color: #eeeeee;
  margin: 0;
  margin-top: 30%;
  border-radius: 5px;
  padding-top: 2em;
  padding-left: 1em;
  overflow: hidden;

  p {
    display: block;
    margin: 0.3em 0;
    :nth-child(1) {
      font-size: 1.1em;
      font-weight: 600;
      margin-top: 7%;
    }
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  width: 100%;
  line-height: 0;
  max-height: 30%;

  p {
    :nth-child(1) {
      margin-top: 1.5em;
    }
  }
`;
