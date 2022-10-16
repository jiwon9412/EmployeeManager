import React from "react";
import AuthService from "../../../service/auth_service";

interface loginProps {
  authService?: AuthService;
}

const Login = ({ authService }: loginProps): JSX.Element => {
  const onLogin = (event: React.MouseEvent): void => {
    authService?.login(event.currentTarget.textContent).then((result) => {
      console.log(result.user);
    });
  };
  return (
    <section>
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
