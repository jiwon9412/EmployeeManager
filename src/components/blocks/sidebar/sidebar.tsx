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
    <SideWrap>
      <SideLogo>
        <img src='images/sidelogo.png' alt='' />
      </SideLogo>
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
    </SideWrap>
  );
};

export default Sidebar;

const SideWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 200px;
`;

const SideLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
  padding: 0 2em;

  img {
    display: block;
    width: 70%;
    height: auto;
  }
  /* border: 1px solid black; */
`;

const SideBarNavigation = styled.nav`
  background-color: #fff;
  width: 100%;

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
      min-width: 100px;

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
