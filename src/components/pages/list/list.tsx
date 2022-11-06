import styled from "styled-components";
import Search from "../../atoms/search";
import Cards from "../../blocks/cards/cards";
import SearchTitle from "../../blocks/searchTitle/searchTitle";

export interface IEmployeeInfos {
  id: number;
  name: string;
  department: string;
  rank: string;
  phone: string;
  photo: string;
}

const data: IEmployeeInfos[] = [
  {
    name: "정지원",
    department: "개발팀",
    rank: "사원",
    photo: "jiwon.png",
    phone: "010-9999-1111",
    id: 0,
  },
  {
    name: "전석영",
    department: "인사팀",
    rank: "대리",
    photo: "sukyoung.jpg",
    phone: "010-2222-1111",
    id: 1,
  },
  {
    name: "나효원",
    department: "개발팀",
    rank: "대리",
    photo: "hyowon.jpeg",
    phone: "010-3333-1111",
    id: 2,
  },
  {
    name: "김수환",
    department: "소설팀",
    rank: "부장",
    photo: "suhwan.jpg",
    phone: "010-2222-3232",
    id: 3,
  },
  {
    name: "한민기",
    department: "개발팀",
    rank: "과장",
    photo: "mingi.jpeg",
    phone: "010-3131-3232",
    id: 3,
  },
];

const List = () => {
  return (
    <ListWrap>
      <ListHeader>
        <SearchTitle title='Member List' />
      </ListHeader>
      <Cards employeeInfos={data} />
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

const ListHeader = styled.section`
  display: flex;

  width: 100%;
`;
