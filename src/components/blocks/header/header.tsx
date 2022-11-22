import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { logout } from "../../../api/authAPI";
import LogoutButton from "../../atoms/loginButton/logoutButton";

const Header = () => {
  const navigate = useNavigate();
  const onLogout = (): void => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <StyleHeader>
      <h1>Employee Manager</h1>
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #04447e;

  max-height: 75px;
  padding: 1em 2em;
  position: fixed;
  top: 0;
  left: 10%;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;

  h1 {
    color: #fff;
    margin: 0;
  }
`;
