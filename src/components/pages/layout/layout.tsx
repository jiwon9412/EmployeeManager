import { useContext, useEffect, useRef } from "react";

import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../blocks/sidebar/sidebar";
import { ContextType, LoginContext } from "../../../context/LoginContext";
const menuList: string[] = ["home", "list", "board"];
const Layout = (): JSX.Element => {
  const { state } = useLocation();
  const { changeUserinfo } = useContext(LoginContext) as ContextType;

  useEffect(() => {
    state && changeUserinfo({ userId: state.userId });
  }, []);

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
