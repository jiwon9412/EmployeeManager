import React, { useRef } from "react";
import AuthService from "../../../service/auth_service";
import Footer from "../../blocks/footer/footer";
import Header from "../../blocks/header/header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../../blocks/sidebar/sidebar";
const menuList: string[] = ["home", "list", "board"];
const Layout = ({
  authService,
}: {
  authService?: AuthService;
}): JSX.Element => {
  return (
    <LayoutWrap>
      <Main>
        <Sidebar menuList={menuList} />
        <Outlet />
      </Main>
    </LayoutWrap>
  );
};

export default Layout;

const LayoutWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Main = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;
