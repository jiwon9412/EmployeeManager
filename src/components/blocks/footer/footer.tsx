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
  width: 100%;
  padding: 5px 5px;
  color: #fff;
  text-align: center;

  h3 {
    margin: 10px;
  }
`;
