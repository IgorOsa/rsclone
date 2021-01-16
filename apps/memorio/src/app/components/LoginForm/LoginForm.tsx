import React, { useEffect, useState } from 'react';
import './LoginForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Container, Card, Button, Col } from 'react-bootstrap';

export const LoginForm = () => {
  return (
    <Container className="login-form-container">
      <Form className="login-form">
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;