import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm/LoginForm';
import AuthService from "../services/auth.service";
import { IUser } from '@memorio/api-interfaces';

export const Login = (props): JSX.Element => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    AuthService.login({
      login,
      password
    }).then(
      () => {
        props.history.push("/dashboard");
        window.location.reload();
      }
    );
  }

  return (
    <main style={{ marginTop: "150px", height: "calc(100vh - 250px)" }}>
      <LoginForm handleSubmit={handleSubmit} setLogin={setLogin} setPassword={setPassword} />
    </main>
  );
};

export default Login;
