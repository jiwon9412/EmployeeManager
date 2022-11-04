import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../../service/auth_service";
import { ListBoxProps } from "../../atoms/listBox";
import ListBoxs from "../../blocks/listBoxs/listBoxs";
import Slider from "../../blocks/slider/slider";

const Home = ({ authService }: { authService?: AuthService }): JSX.Element => {
  const location = useLocation();
  return (
    <HomeBox>
      <Slider />
      <ListBoxs employeeInfos={data} />
    </HomeBox>
  );
};

export default Home;

const HomeBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 10px 0;
`;

const HomeSlider = styled(Slider)`
  height: 300px;
`;

const HomeListBoxs = styled(ListBoxs)`
  max-height: 50%;
`;

const data: ListBoxProps[] = [
  {
    name: "정지원",
    department: "개발팀",
    rank: "사원",
    image: "jiwon.png",
  },
  {
    name: "전석영",
    department: "인사팀",
    rank: "대리",
    image: "sukyoung.jpg",
  },
  {
    name: "나효원",
    department: "개발팀",
    rank: "대리",
    image: "hyowon.jpeg",
  },
];
