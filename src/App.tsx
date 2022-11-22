import Login from "./components/pages/login/login";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/home";
import Layout from "./components/pages/layout/layout";
import List from "./components/pages/list/list";
import Board from "./components/pages/board/board";
import { LoginProvider } from "./context/LoginContext";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className='app'>
        <LoginProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/app' element={<Layout />}>
              <Route path='' element={<Home />} />
              <Route path='list' element={<List />} />
              <Route path='board' element={<Board />} />
            </Route>
          </Routes>
        </LoginProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
