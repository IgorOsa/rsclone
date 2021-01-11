import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bienvenue.scss'
import { ListGroup, Container, Form, Row, Card } from 'react-bootstrap';

export const Bienvenue = () => {
  return (
    <Container className="bienvenue" style={{ marginTop: "100px" }}>
      <Row className="align-items-center justify-content-center">
        <span>My lang is:</span>
        <Form.Control className="lang-select" as="select" size="md">
          <option>Russian</option>
          <option>English</option>
        </Form.Control>
        <span>I want to learn...</span>
      </Row>
      <ListGroup>
        <ListGroup.Item>
            <Card>
              <Card.Img variant="top" height="150px" alt="Some beautiful pic" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  <Card.Link href="#">English</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card>
        </ListGroup.Item>
        <ListGroup.Item>
            <Card>
              <Card.Img variant="top" height="150px" alt="Some beautiful pic" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  <Card.Link href="#">Spanish (as example)</Card.Link>
                </Card.Title>
              </Card.Body>
            </Card> 
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Bienvenue;