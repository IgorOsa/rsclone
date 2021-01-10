import React, { useEffect, useState } from 'react';
import { Message } from '@memorio/api-interfaces';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/Signup'
import { Courses } from './pages/Courses'

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <Router>
        <Container>
            <Header />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/courses" component={ Courses } />
              <Route path="/login" component={ Login } />
              <Route path="/signup" component={ SignUp } />
            </Switch>
        </Container>
      </Router>
    </>
  );
};

export default App;
