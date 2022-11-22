import React from "react";
import { login } from "../../../api/authAPI";
import LoginButton from "../../atoms/loginButton/loginButton";
import styled from "styled-components";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import { useNavigate } from "react-router-dom";

const Login = (): JSX.Element => {
  const nevigate = useNavigate();
  const onLogin = (event: React.MouseEvent): void => {
    login(event.currentTarget.textContent).then((result) => {
      console.log(result.user.uid);
      sessionStorage.setItem("uid", result.user.uid);
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
    <StyleApp>
      <LoginWrap>
        <Header />
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
        <Footer />
      </LoginWrap>
    </StyleApp>
  );
};

export default Login;

const StyleApp = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #626262;
`;

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
