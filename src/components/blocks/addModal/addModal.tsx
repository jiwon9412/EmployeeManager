import React, { useRef, useState } from "react";
import styled from "styled-components";
import { writeEmployeeData } from "../../../service/db_service";
import Button from "../../atoms/button";
import ComboWithTitle from "../../atoms/comboWithTitle";
import ImageUploader from "../../atoms/imageUploader";
import InputWithTitle from "../../atoms/inputWithTitle";
import Modal from "../../atoms/modal";

const departMentList = ["인사팀", "개발팀", "소설팀", "영업팀"];
const rankList = ["사원", "대리", "과장", "차장", "부장"];

export interface IEmployee {
  id: number;
  name?: string;
  rank?: string;
  department?: string;
  phone?: string;
  photo?: string;
}

const AddModal = () => {
  /**state */
  const [info, setInfo] = useState<IEmployee>({ id: 4 });

  /**
   * 프로필 이미지를 세팅하는 함수
   * @param url 등록할 이미지의 url
   * @returns
   */
  const setPhoto = (url: string): void | undefined => {
    setInfo((prevInfo) => ({ ...prevInfo, photo: url }));
  };

  /**
   * 직원 이름을 세팅하는 함수
   * @param name 등록할 직원 이름
   */
  const setName = (name: string): void => {
    //console.log(name);
    setInfo((prevInfo) => ({ ...prevInfo, name: name }));
  };

  /**
   * 핸드폰 번호를 세팅하는 함수
   * @param phone 등록할 핸드폰 번호
   */
  const setPhone = (phone: string): void => {
    setInfo((prevInfo) => ({ ...prevInfo, phone: phone }));
  };

  /**
   * 부서명을 세팅하는 함수
   * @param department 등록할 부서명
   */
  const setDepartment = (department: string): void => {
    //console.log(department);

    setInfo((prevInfo) => ({ ...prevInfo, department: department }));
  };

  /**
   * 직급을 세팅하는 함수
   * @param rank 등록할 직급
   */
  const setRank = (rank: string): void => {
    setInfo((prevInfo) => ({ ...prevInfo, rank: rank }));
  };

  const setEmployee = (e: React.MouseEvent): void => {
    e.preventDefault();
    const employeeId = Date.now();
    writeEmployeeData(employeeId.toString(), info);
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
