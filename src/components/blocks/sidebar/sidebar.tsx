import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SideBarNavigation>
      <ul>
        <StyledLink to=''>
          <li>Home</li>
        </StyledLink>

        <StyledLink to='list'>
          <li>List</li>
        </StyledLink>

        <StyledLink to='board'>
          <li>Board</li>
        </StyledLink>
      </ul>
    </SideBarNavigation>
  );
};

export default Sidebar;

const SideBarNavigation = styled.nav`
  background-color: #fff;
  width: 20%;
  min-width: 120px;
  height: 100%;

  ul {
    list-style: none;
    padding: 0 20px;

    li {
      cursor: pointer;
      padding: 0 10px;
      width: 80%;
      height: 2em;
      border-radius: 10px;

      &:hover {
        background-color: #ededed;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: black;
  font-weight: 500;
  font-size: 18px;
`;
