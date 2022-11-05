import React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle): JSX.Element => {
  return (
    <StyleTitle>
      <h2>{title}</h2>
    </StyleTitle>
  );
};

export default Title;

const StyleTitle = styled.section`
  width: 100%;
  height: 10%;

  h2 {
    margin-left: 3em;
  }
`;
