import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/Signup';
import { Courses } from './pages/Courses';

import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import { PrivateRoute } from './auth/PrivateRoute';
import ProvideAuth from './auth/ProvideAuth';

const App = (): JSX.Element => {
  return (
    <ProvideAuth>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route exact path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </ProvideAuth>
  );
};

export default App;
