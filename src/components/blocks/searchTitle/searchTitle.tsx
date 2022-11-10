import styled from "styled-components";

import Search from "../../atoms/search";
import Title, { ITitle } from "../../atoms/title";

interface ISearchTitle extends ITitle {
  manage?: boolean;
}

const SearchTitle = ({ title, manage }: ISearchTitle) => {
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
