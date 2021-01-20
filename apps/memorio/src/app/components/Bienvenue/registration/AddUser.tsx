import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bienvenue.scss'
import { Container, Form, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export const AddUser = () => {
  const { t } = useTranslation();

  const [name, setName] = useState()
  const [login, setLogin] = useState()
  const [loginDirty, setLoginDirty] = useState(false)
  const [loginError, setLoginError] = useState(t('Cant be empty'))
  const [password, setPassword] = useState()
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordError, setPasswordError] = useState(t('Cant be empty'))
  const [shortError, setShortError] = useState(t('TooShort'))
  const [formValid, setFormValid] = useState(false)

  // const blurHandler = (e: { target: { name: any; }; }) => {
  //   switch (e.target.name) {
  //     case 'login':
  //       setLoginDirty(true)
  //       break;

  //     case 'password':
  //       setPasswordDirty(true)
  //       break;
  //   }
  // }

  const nameHandler = (e: any) => {
    setName(e.target.value)
    if(e.target.value.length < 4) {
      setNameDirty(true)
    } else {
      setNameDirty(false)
    }
  }

  const loginHandler = (e: any) => {
    const re = /^(\w+){4,32}$/
    setLogin(e.target.value)
    if(e.target.value.length < 4 && e.target.value.length  && !re.test(String(e.target.value))) {
      setLoginDirty(true)
    } else {
      setLoginDirty(false)
    }
  }

  const passwordHandler = (e: any) => {
    setPassword(e.target.value)
    if(e.target.value.length < 4 && e.target.value.length) {
      setPasswordDirty(true)
    } else {
      setPasswordDirty(false)
    }
  }

  // libs\api-interfaces\src\lib\api-interfaces.ts

  const formSubmit = () => {
    axios.post('/libs/api-interfaces/src/lib/api-interfaces.ts', {
      name: name,
      login: login,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container className="bienvenue" style={{ marginTop: "20px" }}>
      <Form className="registration-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{ t('Name') }</Form.Label>
          <Form.Control
            type="text"
            placeholder={ t('registrationFormName') }
            value={name}
            onChange={(e) => nameHandler(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>{ t('Login') }</Form.Label>
            {(loginDirty && loginError) && <div style={{ color: "red" }}>{shortError}</div>}
            <Form.Control 
              // onBlur={(e: any) => blurHandler(e)} 
              name='login'
              type="text"
              placeholder={ t('registrationFormLogin') }
              value={login}
              onChange={(e) => loginHandler(e)}
            />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>{ t('Password') }</Form.Label>
            {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{shortError}</div>}
            <Form.Control
              // onBlur={(e: any) => blurHandler(e)} 
              name='password'
              type="password"
              placeholder={ t('registrationFormPassword') }
              value={password}
              onChange={(e) => passwordHandler(e)}
            />
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit"
          onSubmit={ () => formSubmit() }
        >
          { t('Register') }
        </Button>
      </Form>
    </Container>
  );
};

export default AddUser;
