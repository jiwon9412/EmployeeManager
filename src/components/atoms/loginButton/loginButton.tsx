import styled from "styled-components";

interface Button {
  children: string;
  onClick: (event: React.MouseEvent) => void;
}

const LoginButton = ({ children, onClick }: Button) => {
  return <LoginBtn onClick={onClick}>{children}</LoginBtn>;
};

export default LoginButton;

const LoginBtn = styled.button`
  width: 90%;
  height: 2.5em;
  font-size: 1.2em;
  border: 2px solid #385461;
  background-color: #fff;
  border-radius: 30px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ffeae8;
  }
`;
