import React from "react";
import styled from "styled-components";

export interface ITitle {
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
  display: flex;
  align-items: center;

  width: 100%;
  min-width: 300px;
  height: 10%;

  h2 {
    margin-left: 3em;
  }
`;
