import React from "react";
import AuthService from "../../../service/auth_service";
import LoginButton from "../../atoms/loginButton/loginButton";
import styled from "styled-components";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import { useNavigate } from "react-router-dom";

interface loginProps {
  authService?: AuthService;
}

const Login = ({ authService }: loginProps): JSX.Element => {
  const nevigate = useNavigate();
  const onLogin = (event: React.MouseEvent): void => {
    authService?.login(event.currentTarget.textContent).then((result) => {
      console.log(result);
      nevigate("/app", {
        state: {
          username: result.user.displayName,
          useremail: result.user.email,
          userId: result.user.uid,
        },
      });
    });
  };
  return (
    <LoginWrap>
      <Header onLogin={false} />
      <LoginBox>
        <h1>Login</h1>
        <ul>
          <li>
            <LoginButton onClick={onLogin}>Google</LoginButton>
          </li>
          <li>
            <LoginButton onClick={onLogin}>Github</LoginButton>
          </li>
        </ul>
      </LoginBox>
      <Footer onLogin={false} />
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;

  h1 {
    text-align: center;
    font-size: 1.7em;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  ul {
    width: 100%;
    text-align: center;
    list-style: none;
    padding: 0;
  }
`;
