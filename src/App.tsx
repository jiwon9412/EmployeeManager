import Login from "./components/pages/login/login";
import AuthService from "./service/auth_service";
import "./App.css";
import styled from "styled-components";

interface AppProps {
  authService?: AuthService;
}

function App({ authService }: AppProps): JSX.Element {
  return (
    <StyleApp>
      <Login authService={authService} />
    </StyleApp>
  );
}

export default App;

const StyleApp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #626262;
`;
