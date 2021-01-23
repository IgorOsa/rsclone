import React, { useEffect, useState } from 'react';
import Logo from './Components/Logo';
import NavBar from './Components/NavBar';
import Language from './Components/Language';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';

export const Header = () => (
  <header className="header">
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <Col xs lg="2">
          <Logo />
        </Col>
        <Col>
          <NavBar />
        </Col>
        <Col md="auto">
          <Language />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
