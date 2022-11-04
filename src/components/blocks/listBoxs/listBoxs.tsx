import React from "react";
import styled from "styled-components";
import ListBox, { ListBoxProps } from "../../atoms/listBox";

const ListBoxs = ({
  employeeInfos,
}: {
  employeeInfos: ListBoxProps[];
}): JSX.Element => {
  return (
    <ListBoxWrap>
      {employeeInfos.map((employeeInfo) => (
        <ListBox employeeInfo={employeeInfo} />
      ))}
    </ListBoxWrap>
  );
};

export default ListBoxs;

const ListBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  width: 100%;
  min-width: 400px;
  max-height: 40%;
`;
