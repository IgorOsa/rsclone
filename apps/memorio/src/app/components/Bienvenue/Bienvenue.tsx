import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bienvenue.scss'
import { ListGroup, Container, Form, Row, Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

export const Bienvenue = () => {
  const { t } = useTranslation();
  return (
    <Container className="bienvenue" style={{ marginTop: "100px" }}>
      <Row className="align-items-center justify-content-center">
        <span>{t('My lang is')}:</span>
        <Form.Control className="lang-select" as="select" size="sm">
          <option>{t('Russian')}</option>
          <option>{t('English')}</option>
        </Form.Control>
        <span>{t('I want to learn')}...</span>
      </Row>
      <ListGroup>
        <ListGroup.Item>
            <Card>
              <Card.Img variant="top" height="150px" alt="Some beautiful pic" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  <Card.Link href="#">{t('English')}</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
        </ListGroup.Item>
        <ListGroup.Item>
            <Card>
              <Card.Img variant="top" height="150px" alt="Some beautiful pic" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
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
