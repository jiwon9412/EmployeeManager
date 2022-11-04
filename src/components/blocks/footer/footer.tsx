import styled, { css } from "styled-components";

interface FooterProps {
  onLogin: boolean;
}
const Footer = ({ onLogin }: { onLogin: boolean }) => {
  return (
    <StyleFooter onLogin={onLogin}>
      <h3>Manage Your Employees</h3>
    </StyleFooter>
  );
};

export default Footer;

const StyleFooter = styled.footer<FooterProps>`
  background-color: #385461;
  width: 80%;
  max-height: 55px;
  padding: 5px 5px;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 10%;

  ${(props) =>
    !props.onLogin &&
    css`
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
    `}

  h3 {
    margin: 10px;
  }
`;
