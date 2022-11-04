import React from "react";
import styled from "styled-components";
import ListBox from "../../atoms/listBox";

const ListBoxs = (): JSX.Element => {
  return (
    <ListBoxWrap>
      <ListBox />
      <ListBox />
      <ListBox />
    </ListBoxWrap>
  );
};

export default ListBoxs;

const ListBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  width: 100%;
  min-width: 400px;
  max-height: 40%;
`;
