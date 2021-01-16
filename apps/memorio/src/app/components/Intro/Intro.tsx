import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.scss'
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Intro = () => (
  <section className="intro">
    <Container>
      <Row className="d-flex justify-content-between align-items-center" style={{ minHeight: "calc(100vh - 100px)" }}>
        <Col>
          <h2 className="intro__title">The fastest way to learn a language</h2>
          <p className="intro__description">The key? A natural approach to learning real-life language. Jump in and give it a go!</p>
          <Link className="intro__link" to="/signup">Get Started</Link>
        </Col>
          <img
            width="450"
            src="../../../assets/world.png"
          />
      </Row>
    </Container>
  </section>
);

export default Intro;