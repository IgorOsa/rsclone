import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm/LoginForm';

export const Login = (): JSX.Element => {
  return (
    <main style={{ marginTop: "150px", height: "calc(100vh - 250px)" }}>
      <LoginForm />
    </main>
  );
};

export default Login;
