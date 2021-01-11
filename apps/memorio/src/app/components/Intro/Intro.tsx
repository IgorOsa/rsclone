import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.scss'
import { Container, Col, Row, Button } from 'react-bootstrap';

export const Intro = () => (
  <section className="intro">
    <Container>
      <Row style={{ alignItems: "center", height: "100vh"}}>
        <Col>
          <h2>The fastest way to learn a language</h2>
          <p>The key? A natural approach to learning real-life language. Jump in and give it a go!</p>
          <Button>Get Started</Button>
        </Col>
        <Col>
          <img
            width="400"
            src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Intro;