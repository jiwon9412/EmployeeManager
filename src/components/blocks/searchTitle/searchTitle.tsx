import React from "react";
import styled from "styled-components";
import Search from "../../atoms/search";
import Title, { ITitle } from "../../atoms/title";

const SearchTitle = ({ title }: ITitle) => {
  return (
    <StyledSearchTitle>
      <Title title={title} />
      <Search />
    </StyledSearchTitle>
  );
};

export default SearchTitle;

const StyledSearchTitle = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 5%;
`;
