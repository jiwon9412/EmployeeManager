import React from "react";
import styled from "styled-components";
import Card from "../../atoms/card";
import { IEmployeeInfos } from "../../pages/list/list";

const Cards = ({ employeeInfos }: { employeeInfos: IEmployeeInfos[] }) => {
  return (
    <CardsWrap>
      {employeeInfos.map((info) => (
        <Card employeeInfo={info} key={info.id} />
      ))}
    </CardsWrap>
  );
};

export default Cards;

const CardsWrap = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1% 5%;


`;
