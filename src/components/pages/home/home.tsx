import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../../service/auth_service";
import Slider from "../../blocks/slider/slider";

const Home = ({ authService }: { authService?: AuthService }): JSX.Element => {
  const location = useLocation();
  return (
    <HomeBox>
      <Slider />
    </HomeBox>
  );
};

export default Home;

const HomeBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 10px 15%;
`;
