import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './intro.scss'
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const Intro = () => {
  const { t } = useTranslation();
  return (
  <section className="intro">
    <Container>
      <Row className="d-flex justify-content-between align-items-center" style={{ minHeight: "calc(100vh - 160px)" }}>
        <Col>
          <h2 className="intro__title">{t('introTitle')}</h2>
          <p className="intro__description">{t('introDescription')}</p>
          <Link className="intro__link" to="/signup">{t('introLink')}</Link>
        </Col>
          <img
            width="450"
            src="../../../assets/world.png"
          />
      </Row>
    </Container>
  </section>
);}

export default Intro;