import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useAuth } from '../../auth/ProvideAuth';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.scss';

export const LoginForm = (): JSX.Element => {
  const { t } = useTranslation();
  const auth = useAuth();
  const history = useHistory();
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async () => auth.login({ login, password })
    .then(() => {
      history.replace({ pathname: "/dashboard" });
    });

  return (
    <Container className="login-form-container">
      <Form className="login-form">
        <Form.Group controlId="formBasicLogin">
          <Form.Label>{t('loginFormLogin')}</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={t('loginFormLoginPs')}
            onChange={e => setLogin(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('loginFormPassword')}</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder={t('loginFormPasswordPs')}
            onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          {t('loginSubmit')}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
