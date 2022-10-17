import Login from "./components/pages/login/login";
import AuthService from "./service/auth_service";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manage from "./components/pages/manage/manage";

interface AppProps {
  authService?: AuthService;
}

function App({ authService }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <StyleApp>
        <Routes>
          <Route path='/' element={<Login authService={authService} />} />
          <Route path='/app' element={<Manage />} />
        </Routes>
      </StyleApp>
    </BrowserRouter>
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
