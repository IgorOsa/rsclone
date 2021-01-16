import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <main style={{ marginTop: "150px", height: "calc(100vh - 250px)" }}>
      <LoginForm />
    </main>
  );
};

export default Login;