import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { ContextType, LoginContext } from "../../../context/LoginContext";
import { writeEmployeeData } from "../../../service/db_service";
import Button from "../../atoms/button";
import ComboWithTitle from "../../atoms/comboWithTitle";
import ImageUploader from "../../atoms/imageUploader";
import InputWithTitle from "../../atoms/inputWithTitle";
import Modal from "../../atoms/modal";

const departMentList = ["인사팀", "개발팀", "소설팀", "영업팀"];
const rankList = ["사원", "대리", "과장", "차장", "부장"];

export interface IEmployee {
  id?: number;
  name?: string;
  rank?: string;
  department?: string;
  phone?: string;
  photo?: string;
}

interface IAddModal {
  handleClose?: () => void;
}

const AddModal = ({ handleClose }: IAddModal) => {
  /**state */
  const [employeeInfo, setEmployeeInfo] = useState<IEmployee>({
    department: departMentList[0],
    rank: rankList[0],
  });
  const [valudation, setValudation] = useState([
    { key: "name", check: false },
    { key: "phone", check: false },
    { key: "photo", check: false },
    { key: "department", check: true },
    { key: "rank", check: true },
  ]);
  // const { userinfo } = useContext(LoginContext) as ContextType;
  // console.log(userinfo);

  /**
   * 프로필 이미지를 세팅하는 함수
   * @param url 등록할 이미지의 url
   * @returns
   */
  const setPhoto = (url: string): void | undefined => {
    console.log(url);

    setEmployeeInfo((prevInfo) => ({ ...prevInfo, photo: url }));
    toggleValudation("photo");
  };

  /**
   * 직원 이름을 세팅하는 함수
   * @param name 등록할 직원 이름
   */
  const setName = (name: string): void => {
    //console.log(name);
    setEmployeeInfo((prevInfo) => ({ ...prevInfo, name: name }));
    toggleValudation("name");
  };

  /**
   * 핸드폰 번호를 세팅하는 함수
   * @param phone 등록할 핸드폰 번호
   */
  const setPhone = (phone: string): void => {
    setEmployeeInfo((prevInfo) => ({ ...prevInfo, phone: phone }));
    toggleValudation("phone");
  };

  /**
   * 부서명을 세팅하는 함수
   * @param department 등록할 부서명
   */
  const setDepartment = (department: string): void => {
    //console.log(department);

    setEmployeeInfo((prevInfo) => ({ ...prevInfo, department: department }));
    toggleValudation("department");
  };

  /**
   * 직급을 세팅하는 함수
   * @param rank 등록할 직급
   */
  const setRank = (rank: string): void => {
    setEmployeeInfo((prevInfo) => ({ ...prevInfo, rank: rank }));
    toggleValudation("rank");
  };

  /**
   * sessionStorage에 저장된 user id를 사용해서 firebase에 데이터 저장하는 함수
   * @param e 마우스이벤트
   */
  const setEmployee = (e: React.MouseEvent): void => {
    e.preventDefault();
    const employeeId = Date.now();
    //console.log(employeeInfo);
    const uid = sessionStorage.getItem("uid");
    //console.log(uid);
    let check: boolean = true;
    valudation.some((item) => {
      if (!item.check) {
        alert(`${item.key}를 입력하세요.`);
        check = false;
        // some메서드에서 break효과
        return true;
      }
    });

    if (!check) return;

    try {
      uid && writeEmployeeData(uid, employeeId.toString(), employeeInfo);
    } catch (error) {
      alert(`error : ${error}`);
    } finally {
      handleClose && handleClose();
    }
  };

  const toggleValudation = (checkKey: string) => {
    const findIndex = valudation.findIndex((item) => item.key === checkKey);
    let copyValudation = [...valudation];
    if (findIndex !== -1) {
      copyValudation[findIndex] = { ...copyValudation[findIndex], check: true };
    }
    setValudation(copyValudation);
  };

  return (
    <Modal height='70vh'>
      <AddModalHeader>Add Member</AddModalHeader>
      <AddModalBody>
        <InputWithTitle
          title='Name'
          width='70%'
          height='2.5em'
          setValue={setName}
        />
        <ComboWithTitle
          title='Department'
          width='70%'
          height='2.5em'
          list={departMentList}
          setValue={setDepartment}
        />
        <ComboWithTitle
          title='Rank'
          width='70%'
          height='2.5em'
          list={rankList}
          setValue={setRank}
        />
        <InputWithTitle
          title='Phone'
          width='70%'
          height='2.5em'
          setValue={setPhone}
        />
        <ImageUploader width='25%' height='2.5em' handleUpload={setPhoto} />
        <ButtonBox>
          <Button
            title='Add Member + '
            width='60%'
            backgroundColor='#058ae7'
            color='#fff'
            onClick={setEmployee}
          />
        </ButtonBox>
      </AddModalBody>
    </Modal>
  );
};

export default AddModal;

const AddModalHeader = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 600;

  width: 100%;
  height: 15%;
  padding: 0 1.5em;
  border-bottom: 3px solid #ccc;
`;

const AddModalBody = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  padding-top: 1.5em;
  width: 100%;
  height: 75%;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1em;
`;
