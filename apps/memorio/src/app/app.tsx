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

import Dashboard from './components/Dashboard/Dashboard';
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
        <Route path="/dashboard">
          <Dashboard />
        </Route>
          </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
