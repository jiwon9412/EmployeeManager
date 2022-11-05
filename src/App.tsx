import Login from "./components/pages/login/login";
import AuthService from "./service/auth_service";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Layout from "./components/pages/layout/layout";
import List from "./components/pages/list/list";
import Board from "./components/pages/board/board";

interface AppProps {
  authService?: AuthService;
}

function App({ authService }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Login authService={authService} />} />
          <Route path='/app' element={<Layout authService={authService} />}>
            <Route path='' element={<Home authService={authService} />} />
            <Route path='list' element={<List />} />
            <Route path='board' element={<Board />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
