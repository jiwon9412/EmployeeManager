import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../../service/auth_service";
import Footer from "../../blocks/footer/footer";
import Header from "../../blocks/header/header";

const Manage = ({
  authService,
}: {
  authService?: AuthService;
}): JSX.Element => {
  const location = useLocation();
  console.log(authService);
  return (
    <ManageWrap>
      <Header onLogin={true} authService={authService} />
      <ManageBox />
      <Footer />
    </ManageWrap>
  );
};

export default Manage;

const ManageWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 100vh;
`;

const ManageBox = styled.section`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
