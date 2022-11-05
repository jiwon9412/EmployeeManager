import React from "react";
import styled from "styled-components";

const HomeHeader = () => {
  return (
    <StyleHomeHeader>
      <h2>Home</h2>
    </StyleHomeHeader>
  );
};

export default HomeHeader;

const StyleHomeHeader = styled.section`
  width: 100%;
  height: 10%;
  margin-bottom: 1em;

  h2 {
    margin-left: 3em;
  }
`;
