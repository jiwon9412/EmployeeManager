import styled from "styled-components";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeleteBtn = () => {
  return (
    <StyledDeleteBtn>
      <FontAwesomeIcon icon={faTrashCan} />
    </StyledDeleteBtn>
  );
};

export default DeleteBtn;

const StyledDeleteBtn = styled.button`
  width: 3em;
  aspect-ratio: 5/5;
  border-radius: 50%;
  border-style: none;
  font-size: 1.5em;
  background-color: #fff;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
