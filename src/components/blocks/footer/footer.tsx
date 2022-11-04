import styled from "styled-components";

const Footer = () => {
  return (
    <StyleFooter>
      <h3>Manage Your Employees</h3>
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styled.footer`
  background-color: #385461;
  width: 80%;
  max-height: 55px;
  padding: 5px 5px;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 10%;

  h3 {
    margin: 10px;
  }
`;
