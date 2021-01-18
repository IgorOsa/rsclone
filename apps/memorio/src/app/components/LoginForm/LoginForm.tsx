import axios from 'axios';
import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.scss';

const API_LOGIN_ENDPOINT = '/api/login';

export const LoginForm = ({ handleSubmit, setLogin, setPassword }) => {
  const { t } = useTranslation();

  return (
    <Container className="login-form-container">
      <Form className="login-form" onSubmit={handleSubmit}>
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

        <Button variant="primary" type="submit">
          {t('loginSubmit')}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
