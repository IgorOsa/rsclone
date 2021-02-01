import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bienvenue.scss';
import SetCourse from './registration/SetCourse';
import AddUser from './registration/AddUser';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const Bienvenue = () => {
  return (
    <Switch>
      <Route path="/signup/set-course" component={SetCourse} />
      <Route path="/signup/add-user" component={AddUser} />
    </Switch>
  );
};

export default Bienvenue;
