import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ISidebar {
  menuList: string[];
}

interface ILink {
  selected: boolean;
}

const Sidebar = ({ menuList }: ISidebar): JSX.Element => {
  const [selected, setSelected] = useState({
    home: true,
    list: false,
    board: false,
  });

  const handleClick = (menuName: string): void => {
    const newSelected = {
      home: "home" === menuName,
      list: "list" === menuName,
      board: "board" === menuName,
    };
    setSelected(newSelected);
  };

  return (
    <SideBarNavigation>
      <ul>
        <StyledLink
          to=''
          selected={selected["home"]}
          onClick={() => {
            handleClick("home");
          }}
        >
          <li>Home</li>
        </StyledLink>

        <StyledLink
          to='list'
          selected={selected["list"]}
          onClick={() => {
            handleClick("list");
          }}
        >
          <li>List</li>
        </StyledLink>

        <StyledLink
          to='board'
          selected={selected["board"]}
          onClick={() => {
            handleClick("board");
          }}
        >
          <li>Board</li>
        </StyledLink>
      </ul>
    </SideBarNavigation>
  );
};

export default Sidebar;

const SideBarNavigation = styled.nav`
  background-color: #fff;
  width: 25%;
  min-width: 120px;
  /* border-right: 3px solid #385461; */

  ul {
    list-style: none;
    padding: 0 3em;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0 10px;
      width: 100%;
      height: 3em;
      border-radius: 10px;
      font-weight: 500;

      &:hover {
        background-color: #ededed;
      }
    }
  }
`;

const StyledLink = styled(Link)<ILink>`
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

  li {
    ${(props) =>
      props.selected &&
      css`
        background-color: #ededed;
      `}
  }
`;
