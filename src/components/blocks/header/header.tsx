import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import AuthService from "../../../service/auth_service";
import LogoutButton from "../../atoms/loginButton/logoutButton";

interface HeaderProps {
  onLogin: boolean;
}

const Header = ({
  onLogin,
  authService,
}: {
  onLogin: boolean;
  authService?: AuthService;
}) => {
  const navigate = useNavigate();
  const onLogout = (): void => {
    console.log(authService);

    authService?.logout().then(() => {
      navigate("/");
    });
  };

  console.log(onLogin);

  return (
    <StyleHeader onLogin={onLogin}>
      <img src='images/logo.png' alt='' />
      <h1>Employee Manager</h1>
      {onLogin && <LogoutButton onLogout={onLogout} />}
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.header<HeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #04447e;
  width: 80%;
  max-height: 75px;
  padding: 0.3em 1em;
  position: fixed;
  top: 0;
  left: 10%;

  ${(props) =>
    !props.onLogin &&
    css`
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
    `}

  img {
    display: block;
    width: 3em;
    margin-right: 1em;
  }

  h1 {
    color: #fff;
    margin: 0;
  }
`;
