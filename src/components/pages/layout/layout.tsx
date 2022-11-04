import React, { useRef } from "react";
import AuthService from "../../../service/auth_service";
import Footer from "../../blocks/footer/footer";
import Header from "../../blocks/header/header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../../blocks/sidebar/sidebar";

const Layout = ({
  authService,
}: {
  authService?: AuthService;
}): JSX.Element => {
  return (
    <LayoutWrap>
      <Header onLogin={true} authService={authService} />
      <Main>
        <Sidebar />
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrap>
  );
};

export default Layout;

const LayoutWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 100%;
`;

const Main = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 75px;
  padding-bottom: 55px;
`;
