import React from "react";
import styled from "styled-components";

const LogoutButton = ({
  onLogout,
}: {
  onLogout?: (event: React.MouseEvent) => void;
}) => {
  return <LogoutBtn onClick={onLogout}>logout</LogoutBtn>;
};

export default LogoutButton;

const LogoutBtn = styled.button`
  cursor: pointer;
  background-color: #ccc;
  color: #fff;

  border-style: none;
  border-radius: 0.5em;
  width: 5em;
  height: 2em;

  position: absolute;
  display: block;
  top: 20px;
  right: 30px;
  font-weight: 600;

  &:hover {
    background-color: #000;
  }
`;
