import Login from "./components/pages/login/login";
import AuthService from "./service/auth_service";

interface AppProps {
  authService?: AuthService;
}

function App({ authService }: AppProps): JSX.Element {
  return <Login authService={authService} />;
}

export default App;
