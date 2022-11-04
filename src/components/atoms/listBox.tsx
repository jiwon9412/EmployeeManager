import styled from "styled-components";

const ListBox = (): JSX.Element => {
  return (
    <StyleListBox>
      <img src={require("../../assets/jiwon.png")} alt='' />
      <div>
        <p className='name'>정지원</p>
        <p className='info'>개발팀 / 사원</p>
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
  background-color: #e8e8e8;

  img {
    display: block;
    width: 50%;
    aspect-ratio: 16 / 9;
    background-color: #fff;
    padding: 0.4em;
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
