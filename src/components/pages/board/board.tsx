import React from "react";
import styled from "styled-components";
import Title from "../../atoms/title";

const Board = () => {
  return (
    <BoardWrap>
      <Title title='Board' />
    </BoardWrap>
  );
};

export default Board;

const BoardWrap = styled.section`
  width: 100%;
  height: 100vh;
`;
