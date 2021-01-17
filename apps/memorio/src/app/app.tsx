import React, { useEffect, useState } from 'react';
import { Message } from '@memorio/api-interfaces';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/Signup'
import { Courses } from './pages/Courses'

// import AddUser from './components/Bienvenue/registration/AddUser';
// import SetCourse from './components/Bienvenue/registration/SetCourse';

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
        <Header />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/courses" component={ Courses } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ SignUp } />
          </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
