import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './courses-intro.scss';
import { Link } from 'react-router-dom';

export const CoursesIntro = () => {
  return (
    <div className="courses-intro">
      <Container className="container">
        <Row className="justify-content-center align-items-center">
          <h2 className="courses-intro__title">Learn up to 22 languages online with Memorio</h2>
          <p className="courses-intro__description">
            Preparing for a trip, moving to a new country or 
            looking to advance your career? Whatever your next 
            adventure is, one of our courses will teach you all the real-life 
            language you need to get out there and meet the world.
          </p>
          <Link className="courses-intro__link" to="/signup">Start Learning</Link>
        </Row>
      </Container>
    </div>
  );
};

export default CoursesIntro;