import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AddBtn from "../../atoms/addBtn";
import DeleteBtn from "../../atoms/deleteBtn";
import Cards from "../../blocks/cards/cards";
import SearchTitle from "../../blocks/searchTitle/searchTitle";
import ModalBackground from "../../atoms/modalBackground";
import AddModal from "../../blocks/addModal/addModal";
import { getEmployeeData } from "../../../api/dbAPI";

export interface IEmployeeInfos {
  id: number;
  name: string;
  department: string;
  rank: string;
  phone?: string;
  photo?: string;
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
  const [openAddModal, setOpenAddModal] = useState(false);
  const [manage, setManage] = useState(true); //나중에 context로 관리 필요
  const modalRef = useRef<HTMLDivElement>(null);
  const uid = sessionStorage.getItem("uid");
  const [employeeData, setEmployeeData] = useState([]);

  const showAddModal = (): void => {
    setOpenAddModal(true);
    console.log("show");
  };

  const closeAddModal = (e: MouseEvent) => {
    if (
      openAddModal &&
      (!modalRef.current || !modalRef.current.contains(e.target as Node))
    ) {
      setOpenAddModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeAddModal, true);
    return () => {
      document.removeEventListener("click", closeAddModal, true);
    };
  });

  /**
   * 직원 데이터 불러오기
   */
  useEffect(() => {
    getEmployeeData(uid).then((item) => setEmployeeData(item as never));
  }, [employeeData]);

  return (
    <ListWrap>
      <ListHeader>
        <SearchTitle title='Member List' />
        {manage && (
          <BtnBox>
            <DeleteBtn />
            <AddBtn handleClick={showAddModal} />
          </BtnBox>
        )}
      </ListHeader>
      {employeeData && <Cards employeeInfos={employeeData} />}
      <div ref={modalRef}>
        {openAddModal && (
          <AddModal handleClose={() => setOpenAddModal(false)} />
        )}
      </div>
      {openAddModal && <ModalBackground />}
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

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  max-width: 200px;
  margin-right: 3px;
`;
