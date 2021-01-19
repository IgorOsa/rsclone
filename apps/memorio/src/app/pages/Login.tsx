import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm/LoginForm';
import AuthService from '../services/auth.service';
import { useHistory, useLocation } from 'react-router-dom';

export const Login = (props: { history: string[]; }): JSX.Element => {
  const history = useHistory();
  const location = useLocation();

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    AuthService.login({
      login,
      password
    }).then(
      () => {
        history.push({ pathname: "/dashboard" });
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
