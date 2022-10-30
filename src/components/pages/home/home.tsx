import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../../service/auth_service";

const Home = ({ authService }: { authService?: AuthService }): JSX.Element => {
  const location = useLocation();
  console.log(authService);
  return <HomeBox />;
};

export default Home;

const HomeBox = styled.section`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
