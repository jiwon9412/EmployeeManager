import styled from "styled-components";
import Title from "../../atoms/title";

interface Employee {
  id: number;
  name: string;
  department: string;
  rank: string;
  photo: string;
}

const test = {
  id: 3,
  name: "테스트",
  department: "테스트부서",
  rank: "사원",
  photo: "jiwon.png",
};

const List = () => {
  return (
    <ListWrap>
      <Title title='Member List' />
    </ListWrap>
  );
};

export default List;

const ListWrap = styled.section`
  width: 100%;
  height: 100vh;
  padding: 10px 0;
  background-color: #fff;
`;
