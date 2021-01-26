import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Card, Button, Col } from 'react-bootstrap';
import './LanguageSection.scss';

export const LanguageSection = () => {
  return (
    <section className="language-section">
      <Container>
        <h3>I want to learn...</h3>
        <Row>
          <div className="carousel-lang">
            <button type="button">Russian</button>
            <button type="button">English</button>
            <button type="button">Korean</button>
            <button type="button">Japanese</button>
            <button type="button">Turkish</button>
            <button type="button">Chinese</button>
            <button type="button">Spanish</button>
          </div>
        </Row>
        <Row>
          <Card className="slide card" style={{ border: 'none' }}>
            <Row>
              <Col>
                <Card.Title>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis unde quos ipsa assumenda corrupti odio quod
                  cumque exercitationem harum expedita doloremque neque, nihil
                  molestiae, voluptatem delectus repellat deleniti quae dicta
                  consectetur. Ad sunt nulla ducimus!
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Col>
              <Col>
                <img
                  width="250"
                  src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
                />
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </section>
  );
};

export default LanguageSection;
