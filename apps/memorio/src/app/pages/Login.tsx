import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <main style={{ height: "calc(100vh - 210px)" }}>
      <LoginForm />
    </main>
  );
};

export default Login;