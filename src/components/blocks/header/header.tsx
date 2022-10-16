import styled from "styled-components";
const Header = () => {
  return (
    <StyleHeader>
      <img src='images/logo.png' alt='' />
      <h1>Employee Manager</h1>
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #385461;
  width: 100%;
  padding: 5px 5px;

  img {
    display: block;
    width: 3em;
  }

  h1 {
    color: #fff;
    margin: 0;
  }
`;
