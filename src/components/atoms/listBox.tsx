import styled from "styled-components";

export interface ListBoxProps {
  name: string;
  department: string;
  rank: string;
  image: string;
}

const ListBox = ({
  employeeInfo,
}: {
  employeeInfo: ListBoxProps;
}): JSX.Element => {
  const { name, department, rank, image } = employeeInfo;

  return (
    <StyleListBox>
      <img src={require(`../../assets/${image}`)} alt='' />
      <div>
        <p className='name'>{name}</p>
        <p className='info'>
          {department} / {rank}
        </p>
      </div>
    </StyleListBox>
  );
};

export default ListBox;

const StyleListBox = styled.div`
  display: flex;
  width: 25%;
  min-width: 100px;
  aspect-ratio: 16 / 7;
  border-radius: 1em;
  margin: 1em 1.5em;
  padding: 0.5em 0.5em;
  background-color: #daeeff;

  img {
    display: block;
    width: 50%;
    aspect-ratio: 16 / 9;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;

    width: 50%;
    margin-left: 1em;

    p {
      display: block;
      width: 100%;
      padding: 0;
      margin: 0.3em;
      font-size: 0.8em;
    }

    .name {
      font-weight: 600;
    }

    .info {
      color: #034c8d;
      font-weight: 500;
    }
  }
`;
