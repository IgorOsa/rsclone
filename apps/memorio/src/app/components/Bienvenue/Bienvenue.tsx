import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bienvenue.scss'
import SetCourse from './registration/SetCourse'
import AddUser from './registration/AddUser'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

export const Bienvenue = () => {
  // const [userLang, setUserLang] = useState(String)
  // const [userLearningLang, setUserLearningLang] = useState(String)

  // const WrappedSetCourse = function() {
  //   return (<SetCourse />);
  // };
  // const WrappedAddUser = function() {
  //   return (<AddUser />);
  // };

  return (
    <Router>
      <Switch>
        <Route path="/signup/set-course" component={ SetCourse } />
        <Route path="/signup/add-user" component={ AddUser } />
      </Switch>
    </Router>
  )
};

export default Bienvenue;
