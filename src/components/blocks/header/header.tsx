import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../../service/auth_service";
import LogoutButton from "../../atoms/loginButton/logoutButton";
const Header = ({
  onLogin,
  authService,
}: {
  onLogin?: boolean;
  authService?: AuthService;
}) => {
  const navigate = useNavigate();
  const onLogout = (): void => {
    console.log(authService);

    authService?.logout().then(() => {
      navigate("/");
    });
  };

  return (
    <StyleHeader>
      <img src='images/logo.png' alt='' />
      <h1>Employee Manager</h1>
      {onLogin && <LogoutButton onLogout={onLogout} />}
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
  position: relative;

  img {
    display: block;
    width: 3em;
  }

  h1 {
    color: #fff;
    margin: 0;
  }
`;
