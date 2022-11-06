import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <SearchBox>
      <SearchInput />
      <SearchButton>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchButton>
    </SearchBox>
  );
};

export default Search;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 15%;
  min-width: 200px;
  max-width: 300px;
  height: 2.5em;
  border: 1px solid #ccc;
  border-radius: 1em;
  font-size: 1.1em;
  padding: 0 1em;
  &:focus {
    outline: 2px solid #058ae7;
  } /* outline 테두리 속성 수정 */
`;

const SearchButton = styled.button`
  display: block;
  width: 3%;
  min-width: 40px;
  max-width: 60px;
  height: 1em;
  background-color: #fff;
  cursor: pointer;
  border-style: none;
  margin-left: 0.1em;
  font-size: 1.3em;
  color: #5a5a5a;
  &:focus,
  &:hover {
    color: #058ae7;
  }
`;
