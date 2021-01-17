import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bienvenue.scss'
import { ListGroup, Container, Form, Row, Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export const Bienvenue = () => {
  const { t } = useTranslation();
  return (
    <Container className="bienvenue" style={{ marginTop: "20px" }}>
      <Row className="align-items-center justify-content-center">
        <span>{t('My lang is')}:</span>
        <Form.Control className="lang-select" as="select" size="sm">
          <option>{t('Russian')}</option>
          <option>{t('English')}</option>
        </Form.Control>
        <span>{t('I want to learn')}...</span>
      </Row>
      <ListGroup>
        <ListGroup.Item className="item">
            <Card className="card">
              <Card.Img variant="top" height="250px" alt="Some beautiful pic" src="../../../assets/eng-flag-1.jpg" />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <Card.Link href="#">{t('English')}</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
        </ListGroup.Item>
        <ListGroup.Item className="item">
            <Card className="card">
              <Card.Img variant="top" height="250px" alt="Some beautiful pic" src="../../../assets/spanish-flag-1.jpeg" />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <Card.Link href="#">{t('Spanish')}</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Bienvenue;
