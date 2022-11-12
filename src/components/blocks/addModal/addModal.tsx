import styled from "styled-components";
import Button from "../../atoms/button";
import ComboWithTitle from "../../atoms/comboWithTitle";
import ImageUploader from "../../atoms/imageUploader";
import InputWithTitle from "../../atoms/inputWithTitle";
import Modal from "../../atoms/modal";

const departMentList = ["인사팀", "개발팀", "소설팀", "영업팀"];
const rankList = ["사원", "대리", "과장", "차장", "부장"];

const AddModal = () => {
  return (
    <Modal height='70vh'>
      <AddModalHeader>Add Member</AddModalHeader>
      <AddModalBody>
        <InputWithTitle title='Name' width='70%' height='2.5em' />
        <ComboWithTitle
          title='Department'
          width='70%'
          height='2.5em'
          list={departMentList}
        />
        <ComboWithTitle
          title='Rank'
          width='70%'
          height='2.5em'
          list={rankList}
        />
        <InputWithTitle title='Phone' width='70%' height='2.5em' />
        <ImageUploader width='25%' height='2.5em' />
      </AddModalBody>
      <AddModalFooter>
        <Button
          title='Add Member + '
          width='50%'
          backgroundColor='#058ae7'
          color='#fff'
        />
      </AddModalFooter>
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

const AddModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  padding-top: 1.5em;
  width: 100%;
  height: 65%;
`;

const AddModalFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
`;
