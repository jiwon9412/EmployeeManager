import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AddBtn from "../../atoms/addBtn";
import DeleteBtn from "../../atoms/deleteBtn";
import Cards from "../../blocks/cards/cards";
import Modal from "../../blocks/modal/modal";
import SearchTitle from "../../blocks/searchTitle/searchTitle";

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
interface MutableRefObject<T> {
  current: T;
}
const List = () => {
  const [openModal, setOpenModal] = useState(false);
  const [manage, setManage] = useState(true); //나중에 context로 관리 필요
  const modalRef = useRef<HTMLDivElement>(null);

  const showModal = (): void => {
    setOpenModal(true);
    console.log("show");
  };

  const closeModal = (e: MouseEvent) => {
    if (
      openModal &&
      (!modalRef.current || !modalRef.current.contains(e.target as Node))
    ) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeModal, true);
    return () => {
      document.removeEventListener("click", closeModal, true);
    };
  });
  return (
    <ListWrap>
      <ListHeader>
        <SearchTitle title='Member List' />
        {manage && (
          <BtnBox>
            <DeleteBtn />
            <AddBtn handleClick={showModal} />
          </BtnBox>
        )}
      </ListHeader>
      <Cards employeeInfos={data} />
      <div ref={modalRef}>{openModal && <Modal />}</div>
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
