import styled from "styled-components";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IBtn {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AddBtn = ({ handleClick }: IBtn) => {
  return (
    <StyledAddBtn onClick={handleClick}>
      <FontAwesomeIcon icon={faUserPlus} />
    </StyledAddBtn>
  );
};

export default AddBtn;

const StyledAddBtn = styled.button`
  width: 10%;
  aspect-ratio: 5/5;
  border-radius: 50%;
  border-style: none;
  font-size: 1.5em;
  background-color: #fff;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #058ae7;
  }
`;
