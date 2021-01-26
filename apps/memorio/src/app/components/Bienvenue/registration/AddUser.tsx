import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bienvenue.scss';
import { Container, Form, Button } from 'react-bootstrap';
import { useSSR, useTranslation } from 'react-i18next';

export const AddUser = () => {
  const { t } = useTranslation();
  const [newUserStatus, setNewUserStatus] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      login: '',
      password: '',
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .min(2, t('Minimum 2 characters'))
        .max(15, t('Maximum 15 characters'))
        .required(t('Cant be empty')),
      name: Yup.string(),
      password: Yup.string()
        .min(4, t('Minimum 4 characters'))
        .required(t('Cant be empty')),
    }),
    onSubmit: (values) => {
      try {
        const response = axios.post('/api/register', values);
        setNewUserStatus(true)
      } catch (e) {
        console.log(`😱 request failed: ${e}`);
      }
      
    },
  });

  return (
    <Container className="bienvenue" style={{ marginTop: '20px' }}>
      { !newUserStatus ? <Form 
        className="registration-form"
        onSubmit={formik.handleSubmit}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('Name')}</Form.Label>
          <Form.Control
            type="name"
            name="name"
            placeholder={t('registrationFormName')}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('Login')}</Form.Label>
          {formik.errors.login && formik.touched.login && (
            <span style={{color: "red"}}>{formik.errors.login}</span>
          )}
          <Form.Control
            name="login"
            type="login"
            placeholder={t('registrationFormLogin')}
            value={formik.values.login}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('Password')}</Form.Label>
          {formik.errors.password && formik.touched.password && (
            <span style={{color: "red"}}>{formik.errors.password}</span>
          )}
          <Form.Control
            name="password"
            type="password"
            placeholder={t('registrationFormPassword')}
            value={formik.values.password}
            onChange={formik.handleChange}
          />  
        </Form.Group> 
        <Button
          variant="primary"
          type="submit"
          onClick={() => console.log(formik)}
        >
         {t('Register')}
        </Button> 
      </Form> : <Button href="/login" variant="primary">{t('Login')}</Button> }
    </Container>
  );
};

export default AddUser;
