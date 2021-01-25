import React, { useEffect, useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
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
  const [validated, setValidated] = useState(false);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    if (auth.user) {
      history.replace({ pathname: "/dashboard" });
    }
  }, [auth, history])

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(false);
    }

    setValidated(true);

    if (login && password) {
      auth.login({ login, password })
        .then(() => setAuthError(false), () => setAuthError(true));
    }
  }

  return (
    <Container className="login-form-container">
      <Form noValidate validated={validated} className="login-form" onSubmit={handleSubmit}>
        {authError && <Alert variant="danger">{t('Wrong login/password combination!')}</Alert>}
        <Form.Group controlId="formBasicLogin">
          <Form.Label>{t('loginFormLogin')}</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder={t('loginFormLoginPs')}
            onChange={e => setLogin(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            {t('Please input a valid login')}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('loginFormPassword')}</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder={t('loginFormPasswordPs')}
            onChange={e => setPassword(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            {t('Please input a valid password')}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          {t('loginSubmit')}
        </Button>
      </Form>
    </Container >
  );
};

export default LoginForm;
