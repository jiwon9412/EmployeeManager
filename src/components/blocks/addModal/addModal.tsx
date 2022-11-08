import React from "react";
import styled from "styled-components";
import ComboWithTitle from "../../atoms/comboWithTitle";
import InputWithTitle from "../../atoms/inputWithTitle";
import Modal from "../../atoms/modal";

const AddModal = () => {
  return (
    <Modal>
      <AddModalHeader>Add Member</AddModalHeader>
      <AddModalBody>
        <InputWithTitle title='Name' width='70%' height='2.5em' />
        <ComboWithTitle title='Department' width='70%' height='2.5em' />
        <ComboWithTitle title='Rank' width='70%' height='2.5em' />
        <InputWithTitle title='Phone' width='70%' height='2.5em' />
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

const AddModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  padding-top: 1em;
  width: 100%;
  height: 75%;
`;
