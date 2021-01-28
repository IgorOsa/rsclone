import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bienvenue.scss';
import { ListGroup, Container, Form, Row, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const SetCourse = () => {
  const { t } = useTranslation();
  const [userLang, setUserLang] = useState('russian');
  const [userLearningLang, setUserLearningLang] = useState(String);

  return (
    <Container className="bienvenue" style={{ marginTop: '20px' }}>
      <Row className="align-items-center justify-content-center">
        <span>{t('My lang is')}:</span>
        <Form.Control
          className="lang-select"
          as="select"
          size="sm"
          onChange={(el) => setUserLang(el.target.value)}
        >
          <option selected value="russian">
            {t('Russian')}
          </option>
          <option value="english">{t('English')}</option>
        </Form.Control>
        <span>{t('I want to learn')}...</span>
      </Row>
      <ListGroup>
        <ListGroup.Item className="item">
          <Card className="card">
            <Card.Img
              variant="top"
              height="250px"
              alt="Some beautiful pic"
              src="../../../assets/eng-flag-1.jpg"
            />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>
                <Card.Link
                  href="/signup/add-user"
                  onClick={() => setUserLearningLang('english')}
                >
                  {t('English')}
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </ListGroup.Item>
        <ListGroup.Item className="item">
          <Card className="card">
            <Card.Img
              variant="top"
              height="250px"
              alt="Some beautiful pic"
              src="../../../assets/spanish-flag-1.jpeg"
            />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>
                <Card.Link
                  href="/signup/add-user"
                  onClick={() => setUserLearningLang('spanish')}
                >
                  {t('Spanish')}
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default SetCourse;
