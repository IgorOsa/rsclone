import React from 'react';
import './LoginForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <Container className="login-form-container">
      <Form className="login-form">
        <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('loginFormLogin')}</Form.Label>
            <Form.Control type="email" placeholder={t('loginFormLoginPs')} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>{t('loginFormPassword')}</Form.Label>
            <Form.Control type="password" placeholder={t('loginFormPasswordPs')} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {t('loginSubmit')}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;