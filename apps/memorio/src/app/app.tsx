import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Courses } from './pages/Courses';

import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import { PrivateRoute } from './auth/PrivateRoute';
import ProvideAuth from './auth/ProvideAuth';
import EnglishLessons from './components/EnglishLessons'
import LessonDescription from './components/LessonDescription/LessonDescription'
import PlayLesson from './components/PlayLesson/PlayLesson'
import levels from '../data/english'
import SignUp from './pages/Signup';

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
          <PrivateRoute path="/english-lessons">
            <EnglishLessons />
          </PrivateRoute>
          {levels.map((_, i: number) => (
            <PrivateRoute path={`/english-${i}`} key={i}>
              <LessonDescription lessonNum={i} />
            </PrivateRoute>
          ))}
          {levels.map((_, i: number) => (
            <PrivateRoute path={`/task-${i}`} key={i}>
              <PlayLesson lessonNum={i} />
            </PrivateRoute>
          ))}
        </Switch>
        <Footer />
      </Router>
    </ProvideAuth>
  );
};

export default App;
