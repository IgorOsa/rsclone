import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bienvenue.scss'
import { Container, Form, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export const AddUser = ({ userLang, userLearningLang }) => {
  const { t } = useTranslation();

  const [login, setLogin] = useState()
  const [loginDirty, setLoginDirty] = useState(false)
  const [loginError, setLoginError] = useState('cant be empty')

  const [password, setPassword] = useState()
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordError, setPasswordError] = useState('cant be empty')

  return (
    <Container className="bienvenue" style={{ marginTop: "20px" }}>
      <Form className="registration-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{ t('Name') }</Form.Label>
          <Form.Control type="email" placeholder={ t('registrationFormName') } />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>{ t('Login') }</Form.Label>
            <Form.Control type="email" placeholder={ t('registrationFormLogin') } />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>{ t('Password') }</Form.Label>
            <Form.Control type="password" placeholder={ t('registrationFormPassword') } />
        </Form.Group>
        <Button variant="primary" type="submit">
          { t('Register') }
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;
