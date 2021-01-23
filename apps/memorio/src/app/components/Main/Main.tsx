import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button } from 'react-bootstrap';

export const Main = () => (
  <main>
    <Container>
      <h1>Welcome to memorio!</h1>
      <img
        width="450"
        src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
      />
    </Container>
  </main>
);

export default Main;
