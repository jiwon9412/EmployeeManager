import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { ListBoxProps } from "../../atoms/listBox";
import Title from "../../atoms/title";
import ListBoxs from "../../blocks/listBoxs/listBoxs";
import Slider from "../../blocks/slider/slider";

const Home = (): JSX.Element => {
  const location = useLocation();
  return (
    <HomeBox>
      <Title title='Home' />
      <Slider />
      <Title title='Member' />
      {/* <ListBoxs employeeInfos={data} /> */}
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
  height: 100vh;
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
  // {
  //   name: "김수환",
  //   department: "소설팀",
  //   rank: "부장",
  //   image: "suhwan.jpg",
  // },
];
